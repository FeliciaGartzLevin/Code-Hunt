export type ActorResponse = {
	adult: string,
	also_known_as: string[],
	biography: string,
	birthday: string,
	deathday: string,
	gender: number,
	homepage: null,
	id: number,
	imdb_id: string,
	known_for_department: string,
	name: string,
	place_of_birth: string,
	popularity: number,
	profile_path: string,
	credits: ActorCast[]

}

export type ActorCast = {
	adult: string,
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
	video: false,
	vote_average: number,
	vote_count: number,
	character: string,
	credit_id: string,
	order: number
}
