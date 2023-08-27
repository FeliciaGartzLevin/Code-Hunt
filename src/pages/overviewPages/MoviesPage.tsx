import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Moviegrid from '../../components/Moviegrid';
import { getMoviesByPreference } from '../../services/TMDB-API';
import FilterButtons from '../../components/FilterButtons';

const MoviesPage = () => {
	const [filterPreference, setFilterPreference] = useState<FilterPreference>('popular')
	// eller en useSearchParam

	const queryMovies = useQuery(
		["movies"], //fast jag vill ju att mina movies sparas när jag klickar emellan filtreringen
		() => getMoviesByPreference(filterPreference),
	)

	console.log(filterPreference)

	return (
		<div id="MoviesPage" className="">


			<h1 className='text-center text-md-start'>Movies</h1>

			<FilterButtons
				/* behöver skicka ut knappvalet hit */
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
