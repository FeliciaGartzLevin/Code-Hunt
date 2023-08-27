import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Moviegrid from '../../components/Moviegrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';

const MoviesPage = () => {
	const queryClient = useQueryClient()
	const [filterPreference, setFilterPreference] = useState<string>(import.meta.env.VITE_POPULAR_URL)
	// behöver sätta searchParam här till filterPreference

	const queryMovies = useQuery(
		["movies"],
		() => getMoviesByPreference(filterPreference),
	)
	console.log('filterPreference:', filterPreference)

	const handleFiltering = async (choice: string) => {
		await setFilterPreference(choice)
		queryClient.invalidateQueries({ queryKey: ['movies'] })
		queryMovies.refetch()
	}

	return (
		<div id="MoviesPage" className="">


			<h1 className='text-center text-md-start'>Movies</h1>

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
