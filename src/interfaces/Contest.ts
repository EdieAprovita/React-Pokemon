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
