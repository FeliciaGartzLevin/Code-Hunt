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
import { toast, ToastContainer } from 'react-toastify'

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const q = searchParams.get("q") ?? import.meta.env.VITE_POPULAR_URL
	const [filterPreference, setFilterPreference] = useState<string>(q ?? import.meta.env.VITE_POPULAR_URL)
	const customId = 1

	const queryMovies = useQuery(
		["movies"],
		() => getMoviesByPreference(q),
	)

	const handleFiltering = async (choice: string) => {
		await setFilterPreference(choice)
		setSearchParams({ q: choice })
	}

	useEffect(() => {
		queryMovies.refetch()
		setFilterPreference(q)
	}, [q])

	useEffect(() => {
		toast(
			<>
				<p>Would you rather find movies by genre?</p>
				<Link to={'/genres'}>
					<Button variant='secondary'>To genres &raquo;</Button>
				</Link>
			</>
			, { toastId: customId })
	}, [])

	return (
		<div id="MoviesPage" className="">

			<h1 className='text-center text-md-start'>Movies</h1>
			{/* 	{
				toast.info(
					<>
						<p>Would you rather find movies by genre?</p>
						<Link to={'/genres'}>
							<Button variant='secondary'>To genres &raquo;</Button>
						</Link>
					</>)
			} */}

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
					preference={filterPreference}
					filterChoice={(choice) => handleFiltering(choice)}
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
