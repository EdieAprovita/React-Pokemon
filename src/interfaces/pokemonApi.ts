export interface IPokemon {
	name: string;
	url: string;
}

export interface IBerry {
	id: number;
	name: string;
	growth_time: number;
	max_harvest: number;
	natural_gift_power: number;
	size: number;
	smoothness: number;
	soil_dryness: number;
	firmness: {
		name: string;
		url: string;
	};
	flavors: {
		potency: number;
		flavor: {
			name: string;
			url: string;
		};
	}[];
	item: {
		name: string;
		url: string;
	};
	natural_gift_type: {
		name: string;
		url: string;
	};
}

export interface IBerryFirmness {
	id: number;
	name: string;
	berries: {
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

export interface IBerryFlavor {
	id: number;
	name: string;
	berries: {
		potency: number;
		berry: {
			name: string;
			url: string;
		};
	}[];
	contest_type: {
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
}

export interface IContestTypes {
	id: number;
	name: string;
	berry_flavor: {
		name: string;
		url: string;
	};
	names: {
		name: string;
		color: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface IContestEffects {
	id: number;
	appeal: number;
	jam: number;
	effect_entries: {
		effect: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	flavor_text_entries: {
		flavor_text: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface ISuperContestEffects {
	id: number;
	appeal: number;
	flavor_text_entries: {
		flavor_text: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	moves: {
		name: string;
		url: string;
	}[];
}

export interface IEncounterMethods {
	id: number;
	name: string;
	order: number;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface IValue {
	name: string;
	url: string;
}

export interface IEncounterConditions {
	id: number;
	name: string;
	values: IValue[];
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface IEncounterConditionValues {
	id: number;
	name: string;
	condition: {
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
}

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

export interface IMachines {
	id: number;
	item: {
		name: string;
		url: string;
	};
	move: {
		name: string;
		url: string;
	};
	version_group: {
		name: string;
		url: string;
	};
}

export interface IUseBefore {
	name: string;
	url: string;
}

export interface IMoves {
	id: number;
	name: string;
	accuracy: number;
	effect_chance: string;
	pp: number;
	priority: number;
	power: number;
	constest_combos: {
		normal: {
			use_before: IUseBefore[];
			use_after: string;
		};
		super_after: string;
	};
	super: {
		use_before: IUseBefore[];
		use_after: string;
	};
	constest_type: {
		name: string;
		url: string;
	};
	constest_effect: {
		url: string;
	};
	damage_class: {
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
		effect_changes: [];
	}[];
	generation: {
		name: string;
		url: string;
	};
	meta: {
		ailment: {
			name: string;
			url: string;
		};
		category: {
			name: string;
			url: string;
		};
		min_hits: string;
		max_hits: string;
		min_turns: string;
		max_turns: string;
		drain: number;
		healing: number;
		crit_rate: number;
		ailment_chance: number;
		flinch_chance: number;
		stat_chance: number;
	};
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
		past_values: [];
		stat_changes: [];
	}[];
	past_values: [];
	stat_changes: [];
	super_contest_effect: {
		url: string;
	};
	target: {
		name: string;
		url: string;
	};
	type: {
		name: string;
		url: string;
	};
	learned_by_pokemon: {
		name: string;
		url: string;
	}[];
	flavor_text_entries: {
		flavor_text: string;
		language: {
			url: string;
			name: string;
		};
		version_group: {
			url: string;
			name: string;
		};
	}[];
}

export interface IMoveAilments {
	id: number;
	name: string;
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
}

export interface IMoveBattleStyles {
	id: number;
	name: string;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface IMoveCategories {
	id: number;
	name: string;
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	moves: {
		name: string;
		url: string;
	}[];
}

export interface IMoveDamageClasses {
	id: number;
	name: string;
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	moves: {
		name: string;
		url: string;
	}[];
}

export interface IMoveLearnMethods {
	id: number;
	name: string;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	version_groups: {
		name: string;
		url: string;
	}[];
}

export interface IMoveTargets {
	id: number;
	name: string;
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
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
}

export interface IAbilities {
	id: number;
	name: string;
	is_main_series: boolean;
	generation: {
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
	effect_entries: {
		effect: string;
		short_effect: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	effect_changes: {
		version_group: {
			name: string;
			url: string;
		};
		effect_entries: {
			effect: string;
			language: {
				name: string;
				url: string;
			};
		}[];
	}[];
	flavor_text_entries: {
		flavor_text: string;
		language: {
			name: string;
			url: string;
		};
		version_group: {
			name: string;
			url: string;
		};
	}[];
	pokemon: {
		is_hidden: boolean;
		slot: number;
		pokemon: {
			name: string;
			url: string;
		};
	}[];
}

export interface ICharacteristics {
	id: number;
	gene_modulo: number;
	possible_values: number[];
	highest_stat: {
		name: string;
		url: string;
	};
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface IEggGroups {
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

export interface IGenders {
	id: number;
	name: string;
	pokemon_species_details: {
		rate: number;
		pokemon_species: {
			name: string;
			url: string;
		};
	}[];
	required_for_evolution: {
		name: string;
		url: string;
	}[];
}

export interface IGrowthRates {
	id: number;
	name: string;
	formula: string;
	descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	levels: {
		level: number;
		experience: number;
		url: string;
	}[];
	pokemon_species: {
		name: string;
		url: string;
	}[];
}

export interface INatures {
	id: number;
	name: string;
	decreased_stat: {
		name: string;
		url: string;
	};
	increased_stat: {
		name: string;
		url: string;
	};
	likes_flavor: {
		name: string;
		url: string;
	};
	hates_flavor: {
		name: string;
		url: string;
	};
	pokeathlon_stat_changes: {
		max_change: number;
		pokeathlon_stat: {
			name: string;
			url: string;
		};
	}[];
	move_battle_style_preferences: {
		low_hp_preference: number;
		high_hp_preference: number;
		move_battle_style: {
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
}

export interface IPokeathlonStats {
	id: number;
	name: string;
	affecting_natures: {
		increase: {
			max_change: number;
			nature: {
				name: string;
				url: string;
			};
		}[];
		decrease: {
			max_change: number;
			nature: {
				name: string;
				url: string;
			};
		}[];
	};
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}

export interface IPokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: {
		is_hidden: boolean;
		slot: number;
		ability: {
			name: string;
			url: string;
		};
	}[];
	forms: {
		name: string;
		url: string;
	}[];
	game_indices: {
		game_index: number;
		version: {
			name: string;
			url: string;
		};
	}[];
	held_items: {
		item: {
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
	location_area_encounters: string;
	moves: {
		move: {
			name: string;
			url: string;
		};
		version_group_details: {
			level_learned_at: number;
			version_group: {
				name: string;
				url: string;
			};
			move_learn_method: {
				name: string;
				url: string;
			};
		}[];
	}[];
	species: {
		name: string;
		url: string;
	};
	sprites: {
		back_default: string;
		back_female: string;
		back_shiny: string;
		back_shiny_female: string;
		front_default: string;
		front_female: string;
	};
	other: {
		dream_world: {
			front_default: string;
			front_female: string;
		};
		home: {
			front_default: string;
			front_female: string;
			front_shiny: string;
			front_shiny_female: string;
		};
		official_artwork: {
			front_default: string;
		};
	};
	versions: {
		generation_i: {
			red_blue: {
				back_default: string;
				back_gray: string;
				front_default: string;
				front_gray: string;
			};
			yellow: {
				back_default: string;
				back_gray: string;
				front_default: string;
				front_gray: string;
			};
		};
		generation_ii: {
			crystal: {
				back_default: string;
				back_shiny: string;
				front_default: string;
				front_shiny: string;
			};
			gold: {
				back_default: string;
				back_shiny: string;
				front_default: string;
				front_shiny: string;
			};
			silver: {
				back_default: string;
				back_shiny: string;
				front_default: string;
				front_shiny: string;
			};
		};
		generation_iii: {
			emerald: {
				back_default: string;
				back_shiny: string;
				front_default: string;
				front_shiny: string;
			};
			firered_leafgreen: {
				back_default: string;
				back_shiny: string;
				front_default: string;
				front_shiny: string;
			};
			ruby_sapphire: {
				back_default: string;
				back_shiny: string;
				front_default: string;
				front_shiny: string;
			};
		};
		generation_iv: {
			diamond_pearl: {
				back_default: string;
				back_female: string;
				back_shiny: string;
				back_shiny_female: string;
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
			heartgold_soulsilver: {
				back_default: string;
				back_female: string;
				back_shiny: string;
				back_shiny_female: string;
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
			platinum: {
				back_default: string;
				back_female: string;
				back_shiny: string;
				back_shiny_female: string;
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
		};
		generation_v: {
			black_white: {
				animated: {
					back_default: string;
					back_female: string;
					back_shiny: string;
					back_shiny_female: string;
					front_default: string;
					front_female: string;
					front_shiny: string;
					front_shiny_female: string;
				};
				back_default: string;
				back_female: string;
				back_shiny: string;
				back_shiny_female: string;
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
		};
		generation_vi: {
			omegaruby_alphasapphire: {
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
			x_y: {
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
		};
		generation_vii: {
			icons: {
				front_default: string;
				front_female: string;
			};
			ultra_sun_ultra_moon: {
				front_default: string;
				front_female: string;
				front_shiny: string;
				front_shiny_female: string;
			};
		};
		generation_viii: {
			icons: {
				front_default: string;
				front_female: string;
			};
		};
		stats: {
			base_stat: number;
			effort: number;
			stat: {
				name: string;
				url: string;
			};
		}[];
		types: {
			slot: number;
			type: {
				name: string;
				url: string;
			};
		}[];
		past_types: {
			generation: {
				name: string;
				url: string;
			};
			types: {
				slot: number;
				type: {
					name: string;
					url: string;
				};
			}[];
		}[];
	};
}

export interface IPokemonLocationAreas {
	location_area: {
		name: string;
		url: string;
	};
	version_details: {
		max_chance: number;
		encounter_details: {
			min_level: number;
			max_level: number;
			condition_values: {
				name: string;
				url: string;
			}[];
			chance: number;
			method: {
				name: string;
				url: string;
			};
		}[];
		version: {
			name: string;
			url: string;
		};
	}[];
}

export interface IPokemonColors {
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

export interface IPokemonForm {
	id: number;
	name: string;
	order: number;
	form_order: number;
	is_default: boolean;
	is_battle_only: boolean;
	is_mega: boolean;
	form_name: string;
	pokemon: {
		name: string;
		url: string;
	};
	sprites: {
		back_default: string;
		back_female: string;
		back_shiny: string;
		back_shiny_female: string;
		front_default: string;
		front_female: string;
		front_shiny: string;
		front_shiny_female: string;
	};
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
	version_group: {
		name: string;
		url: string;
	};
}

export interface IPokemonHabitats {
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

export interface IPokemonShapes {
	id: number;
	name: string;
	awesome_names: {
		awesome_name: string;
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
	pokemon_species: {
		name: string;
		url: string;
	}[];
}

export interface IPokemonSpecies {
	id: number;
	name: string;
	order: number;
	gender_rate: number;
	capture_rate: number;
	base_happiness: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	hatch_counter: number;
	has_gender_differences: boolean;
	forms_switchable: boolean;
	growth_rate: {
		name: string;
		url: string;
	};
	pokedex_numbers: {
		entry_number: number;
		pokedex: {
			name: string;
			url: string;
		};
	}[];
	egg_groups: {
		name: string;
		url: string;
	}[];
	color: {
		name: string;
		url: string;
	};
	shape: {
		name: string;
		url: string;
	};
	evolves_from_species: {
		name: string;
		url: string;
	};
	evolution_chain: {
		url: string;
		habitat: string;
	};
	generation: {
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
	flavor_text_entries: {
		flavor_text: string;
		language: {
			name: string;
			url: string;
		};
		version: {
			name: string;
			url: string;
		};
	}[];
	form_descriptions: {
		description: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	genera: {
		genus: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	varieties: {
		is_default: boolean;
		pokemon: {
			name: string;
			url: string;
		};
	}[];
}

export interface IPokemonStats {
	id: number;
	name: string;
	game_index: number;
	is_battle_only: boolean;
	affecting_moves: {
		increase: {
			change: number;
			move: {
				name: string;
				url: string;
			};
		}[];
		decrease: {
			change: number;
			move: {
				name: string;
				url: string;
			};
		}[];
	};
	affecting_natures: {
		increase: {
			name: string;
			url: string;
		}[];
		decrease: {
			name: string;
			url: string;
		}[];
	};
	characteristics: {
		url: string;
	}[];
	move_damage_class: {
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
}

export interface IPokemonTypes {
	id: number;
	name: string;
	damage_relations: {
		no_damage_to: {
			name: string;
			url: string;
		}[];
		half_damage_to: {
			name: string;
			url: string;
		}[];
		double_damage_to: {
			name: string;
			url: string;
		}[];
		no_damage_from: {
			name: string;
			url: string;
		}[];
		half_damage_from: {
			name: string;
			url: string;
		}[];
		double_damage_from: {
			name: string;
			url: string;
		}[];
	};
	past_damage_relations: {
		generation: {
			name: string;
			url: string;
		};
		damage_relations: {
			no_damage_to: {
				name: string;
				url: string;
			}[];
			half_damage_to: {
				name: string;
				url: string;
			}[];
			double_damage_to: {
				name: string;
				url: string;
			}[];
			no_damage_from: {
				name: string;
				url: string;
			}[];
			half_damage_from: {
				name: string;
				url: string;
			}[];
			double_damage_from: {
				name: string;
				url: string;
			}[];
		};
	}[];
	game_indices: {
		game_index: number;
		generation: {
			name: string;
			url: string;
		};
	}[];
	generation: {
		name: string;
		url: string;
	};
	move_damage_class: {
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
	pokemon: {
		slot: number;
		pokemon: {
			name: string;
			url: string;
		};
	}[];
	moves: {
		name: string;
		url: string;
	}[];
}

export interface ILanguage {
	id: number;
	name: string;
	official: boolean;
	iso639: string;
	iso3166: string;
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
}
