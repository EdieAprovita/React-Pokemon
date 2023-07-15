import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IPokemon } from "./interfaces/pokemonApi";

const PokemonComponent: React.FC = () => {
	const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			try {
				const response = await axios.get<{ results: IPokemon[] }>(
					"https://pokeapi.co/api/v2/pokemon?limit=20"
				);
				const promises = response.data.results.map(pokemon =>
					axios.get<IPokemon>(pokemon.url)
				);
				const pokemonResponses = await Promise.all(promises);
				const pokemons = pokemonResponses.map(
					(pokemonResponse: AxiosResponse<IPokemon>) => pokemonResponse.data
				);
				console.log(pokemons);
				setPokemonList(pokemons);
			} catch (err) {
				console.error(err);
			}
		};

		void fetchPokemons();
	}, []);

	return (
		<div>
			{pokemonList.map(pokemon => (
				<div key={pokemon.id}>
					<h2>{pokemon.name}</h2>
					<p>{pokemon.id}</p>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
					<p>Height: {pokemon.height}</p>
					<p>Weight: {pokemon.weight}</p>
				</div>
			))}
		</div>
	);
};

export default PokemonComponent;
