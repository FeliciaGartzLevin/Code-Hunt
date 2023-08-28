type MovieResponse = {
	page: number,
	results: Movie[],
	total_pages: number,
	total_results: number,
}
// <Old type, key(s) to replace, new type(s) of the key(s)>
type DetailedMovieRespons = ChangeTypeOfKeys<MovieResponse, 'response', DetailedMovie>

type Movie = {
	adult: boolean,
	backdrop_path: string,
	genre_ids: number[],
	id: number,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,

}

type idName = {
	id: number,
	name: string
}

type ProductionCompany = {
	id: number,
	logo_path: string,
	name: string,
	origin_country: string,
}

type ProductionCountry = {
	iso_3166_1: string,
	name: string,
}

type SpokenLang = {
	english_name: string,
	iso_639_1: string,
	name: string
}
type Credits = {
	cast: Cast[],
	crew: Crew[]

}

type Cast = {
	adult: boolean,
	gender: number,
	id: number,
	known_for_department: string,
	name: string,
	original_name: string,
	popularity: number,
	profile_path: string | null,
	cast_id: number,
	character: string,
	credit_id: string,
	order: number,

}

type Crew = {
	adult: boolean,
	gender: number,
	id: number,
	known_for_department: stringn,
	name: string,
	original_name: string,
	popularity: number,
	profile_path: string,
	credit_id: string,
	department: string,
	job: string
}

type DetailedMovie = {
	adult: boolean,
	backdrop_path: string,
	belongs_to_collection: number | null,
	budget: number,
	genres: idName[],
	homepage: string,
	id: number,
	imdb_id: string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: ProductionCompany[],
	production_countries: ProductionCompany[],
	release_date: string | number,
	revenue: number,
	runtime: number,
	spoken_languages: SpokenLang[],
	status: string,
	tagline: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
	credits: Credits

}

/**
 * A type utility map made by https://dev.to/denniscual/typescript-hack-simple-utility-type-for-changing-type-of-keys-4bba
 *
 * Change the type of Keys of T from NewType
 */
export type ChangeTypeOfKeys<
	T extends object,
	Keys extends keyof T,
	NewType
> = {
		// Loop to every key. We gonna check if the key
		// is assignable to Keys. If yes, change the type.
		// Else, retain the type.
		[key in keyof T]: key extends Keys ? NewType : T[key]
	}

