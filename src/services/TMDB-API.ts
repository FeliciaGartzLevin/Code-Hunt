import axios from 'axios'
import { GenreList } from '../types/GenreTypes'

const FAKE_DELAY = 0
// const notAdult = 'include_adult=false'
const API_DEFAULT_PARAMS = {
	include_adult: false,
}

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": import.meta.env.VITE_V4_ACCESS_TOKEN,
	},
	params: {
		...API_DEFAULT_PARAMS
	}
})

const get = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)

	!!FAKE_DELAY && await new Promise((r) => setTimeout(r, FAKE_DELAY))

	return response.data
}

/**
 * Get movielist based on url
 */
export const getMoviesByPreference = (sortingPreference: string) => {
	return get<MovieResponse>(sortingPreference)
}

export const getGenreList = () => {
	return get<GenreList>('/genre/movie/list?')
}


// /**
//  * Get a single todo
//  *
//  * @param todo_id Todo ID to get
//  */
// export const getTodo = (todo_id: number) => {
//     return get<Todo>('/todos/' + todo_id)
// }

