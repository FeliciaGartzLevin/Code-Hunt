import axios from 'axios'
import { GenreList } from '../types/GenreTypes'

const FAKE_DELAY = 0

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
export const getMoviesByPreference = <T>(sortingPreference: string) => {
	return get<T>(sortingPreference)
}

/**
 * Get genres
 * @returns an array of the available genres
 */
export const getGenreList = () => {
	return get<GenreList>('/genre/movie/list?')
}
