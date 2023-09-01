import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMoviesByPreference } from '../../services/TMDB-API'
import MoviePresentation from '../../components/MoviePage/MoviePresentation'
import { DetailedMovie } from '../../types/MovieTypes'
import HandleAllErrors from '../../components/HandleAllErrors'

const MoviePage = () => {
	const { movieId } = useParams()

	const movieQuery = useQuery(
		['movie', movieId],
		() => getMoviesByPreference<DetailedMovie>('/movie/' + movieId + '?' + 'append_to_response=credits'),
		{ enabled: !!movieId && movieId?.length > 0 }
	)

	return (
		<div id='MoviePage' className='all-pages'>
			{movieQuery.isError &&
				<HandleAllErrors />
			}
			{!movieQuery.isError && movieQuery.data &&
				<MoviePresentation
					movieData={movieQuery.data}
				/>

			}

		</div>
	)
}

export default MoviePage
