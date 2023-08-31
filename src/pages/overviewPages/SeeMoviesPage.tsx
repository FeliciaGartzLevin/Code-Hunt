import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../../components/Moviegrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';
import Alert from 'react-bootstrap/Alert';

import { Button } from 'react-bootstrap';
import { MovieResponse } from '../../types/MovieTypes';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FilterButtonsArray from '../../data/FilterBtnArray';

const SeeMoviesPage = () => {
	const { preferenceURL } = useParams()
	const filters = FilterButtonsArray
	// getting the right url for queryMovies by finding which preference filter matches preferenceURL-param
	const currentGenre = filters.find(pref => pref.url === preferenceURL)!.queryUrl
	const [getUrl, setGetUrl] = useState<string>(currentGenre)

	const queryMovies = useQuery(
		["movies", { preferenceURL }],
		() => getMoviesByPreference<MovieResponse>(getUrl),
		{ enabled: !!getUrl }
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
					choice={(url: string) => setGetUrl(url)}
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

export default SeeMoviesPage
