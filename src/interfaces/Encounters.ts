export interface IValue {
	name: string;
	url: string;
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
