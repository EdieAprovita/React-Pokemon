export interface IGenerations {
	id: number;
	name: string;
	abilities: [];
	main_region: {
		name: string;
		url: string;
	};
	moves: {
		name: string;
		url: string;
	}[];
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
	types: {
		name: string;
		url: string;
	}[];
	version_groups: {
		name: string;
		url: string;
	}[];
}

export interface IPokedexes {
	id: number;
	name: string;
	is_main_series: boolean;
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	pokemon_entries: {
		entry_number: number;
		pokemon_species: {
			name: string;
			url: string;
		};
	}[];
	region: {
		name: string;
		url: string;
	};
	version_groups: {
		name: string;
		url: string;
	}[];
}

export interface IVersion {
	id: number;
	name: string;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	version_group: {
		name: string;
		url: string;
	};
}

export interface IVersionGroups {
	id: number;
	name: string;
	order: number;
	generation: {
		name: string;
		url: string;
	};
	move_learn_methods: {
		name: string;
		url: string;
	}[];
	pokedexes: {
		name: string;
		url: string;
	}[];
	regions: {
		name: string;
		url: string;
	}[];
	versions: {
		name: string;
		url: string;
	}[];
}
