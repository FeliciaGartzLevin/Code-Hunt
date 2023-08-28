import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMoviesByPreference } from '../../services/TMDB-API'
import MoviePresentation from '../../components/MoviePresentation'
import { DetailedMovie } from '../../types/MovieTypes'


const MoviePage = () => {
	const { movieId } = useParams()

	console.log('movieId:', movieId)

	const movieQuery = useQuery(
		['movie', movieId],
		() => getMoviesByPreference<DetailedMovie>('/movie/' + movieId + '?' + 'append_to_response=credits'),
		{ enabled: !!movieId && movieId?.length > 0 }
	)
	{ movieQuery.data && console.log(movieQuery.data) }

	return (
		<div id='MoviePage' className='all-pages'>

			{movieQuery.data &&
				<MoviePresentation
					movieData={movieQuery.data}
				/>

			}

		</div>
	)
}

export default MoviePage
