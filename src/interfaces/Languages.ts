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
