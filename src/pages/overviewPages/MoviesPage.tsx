import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import MovieGrid from '../../components/MovieGrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';
import { Link, useSearchParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import Loading from '../../assets/img/loading.gif'
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify'
import { MovieResponse } from '../../types/MovieTypes';
import { FilterButton } from '../../types/FilterBtns';

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	// const q = searchParams.get("q") ?? import.meta.env.VITE_POPULAR_URL
	const [filterPreference, setFilterPreference] = useState<string>( /* url that is sent ?? */ import.meta.env.VITE_POPULAR_URL)
	const customToastId = 1

	const queryMovies = useQuery(
		["movies"],
		() => getMoviesByPreference<MovieResponse>(filterPreference),
	)

	const handleFiltering = async (chosenBtn: FilterButton) => {
		// ta emot knapp här istället och sätt ihop strängen som ska sökas på
		// + ändra searchparams

		if (chosenBtn.search_params) {
			setSearchParams(chosenBtn.search_params)
			setFilterPreference(chosenBtn.url + `?with_release_type=${chosenBtn.search_params.with_release_type}&primary_release_date.lte=${chosenBtn.search_params.primary_release_date_lte}&sort_by=${chosenBtn.search_params.sort_by}`)
			return
		}
		setFilterPreference(chosenBtn.url)
		setSearchParams({})
		console.log('filterPreference:', filterPreference)
		// await setFilterPreference(choice)
		// console.log(choice)
		// setSearchParams({ q: choice })
	}

	useEffect(() => {
		queryMovies.refetch()
		// setFilterPreference(q)
	}, [filterPreference])

	useEffect(() => {
		toast(
			<>
				<p>Would you rather find movies by genre?</p>
				<Link to={'/genres'}>
					<Button variant='secondary'>To genres &raquo;</Button>
				</Link>
			</>
			, { toastId: customToastId })
	}, [])

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

			{queryMovies.isLoading &&
				<Image src={Loading} />
			}

			{!queryMovies.isError &&
				<FilterButtons
					// preference={filterPreference}
					filterChoice={(chosenBtn) => handleFiltering(chosenBtn)}
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

export default MoviesPage
