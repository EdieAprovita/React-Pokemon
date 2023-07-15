export interface IChain {
	id: number;
	baby_trigger_item: string;
	chain: {
		is_baby: boolean;
		species: {
			name: string;
			url: string;
		};
		evolution_details: string;
		evolves_to: {
			is_baby: boolean;
			species: {
				name: string;
				url: string;
			};
			evolution_details: string;
			evolves_to: {
				is_baby: boolean;
				species: {
					name: string;
					url: string;
				};
				evolution_details: {
					item: string;
					trigger: {
						name: string;
						url: string;
					};
					gender: string;
					held_item: string;
					known_move: string;
					known_move_type: string;
					location: string;
					min_level: number;
					min_happiness: string;
					min_beauty: string;
					min_affection: string;
					needs_overworld_rain: boolean;
					party_species: string;
					party_type: string;
					relative_physical_stats: string;
					time_of_day: string;
					trade_species: string;
					turn_upside_down: boolean;
				}[];
				evolves_to: [];
			}[];
		}[];
	};
}

export interface IEvolutionTriggers {
	id: number;
	name: string;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	pokemon_species: {
		name: string;
		url: string;
	}[];
}
