import axios from 'axios'

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
 * Get either most popular or top_rated movies in descending order
 */

// skicka in 'popular' eller 'top_rated' eller den sista vad var den?
export const getMoviesByPreference = (sortingPreference: string) => {
	return get<MovieResponse>(sortingPreference)
}


// /**
//  * Get a single todo
//  *
//  * @param todo_id Todo ID to get
//  */
// export const getTodo = (todo_id: number) => {
//     return get<Todo>('/todos/' + todo_id)
// }

// /**
//  * Create a new todo
//  *
//  * @param data Object with properties and values for the new todo
//  */
// export const createTodo = async (todo: NewTodo) => {
//     const res = await axios.post(`${BASE_URL}/todos`, todo)
//     return res.data as Todo
// }

// /**
//  * Update a todo
//  *
//  * @param todo_id Todo to update
//  * @param data Data to update todo with
//  */
// export const updateTodo = async (todo_id: number, data: PartialTodo) => {
//     const res = await axios.patch(`${BASE_URL}/todos/${todo_id}`, data)
//     return res.data as Todo
// }

// export const toggleTodo = async (todo: Todo) => {
//     const res = await axios.patch(`${BASE_URL}/todos/${todo.id}`, todo)
//     return res.data as Todo
// }

// /**
//  * Delete a todo
//  *
//  * @param todo_id Todo to delete
//  */
// export const deleteTodo = async (todo_id: number) => {
//     const res = await axios.delete(`${BASE_URL}/todos/${todo_id}`)
//     return res.data
// }
