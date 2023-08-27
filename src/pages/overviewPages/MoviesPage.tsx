import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Moviegrid from '../../components/Moviegrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';

const MoviesPage = () => {
	const [filterPreference, setFilterPreference] = useState<string>('/movie/popular')
	// behöver sätta searchParam här till filterPreference

	const queryMovies = useQuery(
		["movies"],
		() => getMoviesByPreference(filterPreference),
	)
	console.log('filterPreference:', filterPreference)
	return (
		<div id="MoviesPage" className="">


			<h1 className='text-center text-md-start'>Movies</h1>

			<FilterButtons
				preference={filterPreference}
				filterChoice={(choice) => setFilterPreference(choice)}
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
