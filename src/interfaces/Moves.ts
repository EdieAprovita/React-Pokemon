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
