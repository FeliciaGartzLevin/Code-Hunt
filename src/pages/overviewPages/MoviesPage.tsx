import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Moviegrid from '../../components/Moviegrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const q = searchParams.get("q") ?? import.meta.env.VITE_POPULAR_URL
	const [filterPreference, setFilterPreference] = useState<string>(q ?? import.meta.env.VITE_POPULAR_URL)

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

	return (
		<div id="MoviesPage" className="">


			<h1 className='text-center text-md-start'>Movies</h1>

			{/* {queryMovies.isError} */}

			<FilterButtons
				preference={filterPreference}
				filterChoice={(choice) => handleFiltering(choice)}
			/>

			{queryMovies.data && (
				<Moviegrid
					movieArray={queryMovies.data.results}
				/>
			)}

		</div>
	)
}

export default MoviesPage
