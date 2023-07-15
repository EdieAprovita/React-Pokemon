export interface IItems {
	id: number;
	name: string;
	cost: number;
	fling_power: number;
	fling_effect: {
		name: string;
		url: string;
	};
	attributes: {
		name: string;
		url: string;
	}[];
	category: {
		name: string;
		url: string;
	};
	effect_entries: {
		effect: string;
		short_effect: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	flavor_text_entries: {
		text: string;
		version_group: {
			name: string;
			url: string;
		};
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
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	sprites: {
		default: string;
	};
	held_by_pokemon: {
		pokemon: {
			name: string;
			url: string;
		};
		version_details: {
			rarity: number;
			version: {
				name: string;
				url: string;
			};
		}[];
	}[];
	baby_trigger_for: {
		url: string;
	};
}

export interface IAttributes {
	id: number;
	name: string;
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	items: {
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
}

export interface IItemCategories {
	id: number;
	name: string;
	items: {
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
	pocket: {
		name: string;
		url: string;
	};
}

export interface IItemFlingEffects {
	id: number;
	name: string;
	effect_entries: {
		effect: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	items: {
		name: string;
		url: string;
	}[];
}

export interface IItemPockets {
	id: number;
	name: string;
	categories: {
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
}
