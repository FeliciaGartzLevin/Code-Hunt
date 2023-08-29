import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../../components/MovieGrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';
import Alert from 'react-bootstrap/Alert';

import { Button } from 'react-bootstrap';
import { MovieResponse } from '../../types/MovieTypes';
import { useParams } from 'react-router-dom';

const InCinemaMoviesPage = () => {
	const { preferenceURL } = useParams()
	console.log(preferenceURL)

	const queryMovies = useQuery(
		["movies", preferenceURL],
		() => getMoviesByPreference<MovieResponse>(import.meta.env.VITE_TOP_RATED_URL),
	)

	return (
		<div id="MoviesPage" className="">

			<h1 className='text-center text-md-start'>Movies</h1>

			{queryMovies.isError &&
				<Alert variant='danger'>
					Something went wrong.
					<div className='mt-2'>
						<Button
							variant='secondary'
							onClick={() => queryMovies.refetch()}
						>
							Try again
						</Button>
					</div>
				</Alert>
			}

			{!queryMovies.isError &&
				<FilterButtons
					currentUrl={preferenceURL}
				/>
			}

			{queryMovies.data && !queryMovies.isLoading && !queryMovies.isError && (
				<MovieGrid
					movieArray={queryMovies.data.results}
				/>
			)}

		</div>
	)
}

export default InCinemaMoviesPage
