import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMovie, getMoviesByPreference } from '../../services/TMDB-API'


const MoviePage = () => {
	const { id } = useParams()
	const movieId = id ?? ''

	const movieQuery = useQuery(
		['movie', id],
		() => getMoviesByPreference<Movie>('/movie/' + movieId)
	)

	return (
		<div id='MoviePage' className='all-pages'>
			<h1>Movie details page</h1>
		</div>
	)
}

export default MoviePage
