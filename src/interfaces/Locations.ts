export interface ILocations {
	id: number;
	name: string;
	region: {
		name: string;
		url: string;
	};
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	game_indices: {
		game_index: number;
		generation: {
			name: string;
			url: string;
		};
	}[];
	areas: {
		name: string;
		url: string;
	}[];
}

export interface ILocationAreas {
	id: number;
	name: string;
	game_index: number;
	encounter_method_rates: {
		encounter_method: {
			name: string;
			url: string;
		};
		version_details: {
			rate: number;
			version: {
				name: string;
				url: string;
			};
		}[];
	}[];
	location: {
		name: string;
		url: string;
	};
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	pokemon_encounters: {
		pokemon: {
			name: string;
			url: string;
		};
		version_details: {
			version: {
				name: string;
				url: string;
			};
			max_chance: number;
			encounter_details: {
				min_level: number;
				max_level: number;
				condition_values: [];
				chance: number;
				method: {
					name: string;
					url: string;
				};
			}[];
		}[];
	}[];
}

export interface IPalParkAreas {
	id: number;
	name: string;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	pokemon_encounters: {
		base_score: number;
		rate: number;
		pokemon_species: {
			name: string;
			url: string;
		};
	}[];
}

export interface IRegions {
	id: number;
	name: string;
	locations: {
		name: string;
		url: string;
	}[];
	main_generation: {
		name: string;
		url: string;
	};
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	pokedexes: {
		name: string;
		url: string;
	}[];
	version_groups: {
		name: string;
		url: string;
	}[];
}
