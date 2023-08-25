import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Moviegrid from '../../components/Moviegrid';
import { getMoviesByPreference } from '../../services/TMDB-API';

const MoviesPage = () => {
	const [filterPreference, /* setFilterPreference */] = useState<'popular' | 'top_rated'>('top_rated')
	// eller en useSearchParam

	const queryMovies = useQuery(
		["movies"], //fast jag vill ju att mina movies sparas när jag klickar emellan filtreringen
		() => getMoviesByPreference(filterPreference),
	)

	return (
		<div id="MoviesPage" className="">

			<h1>Movies</h1>

			{queryMovies.data && (
				<Moviegrid
					movieArray={queryMovies.data.results}
				/>
			)}

		</div>
	)
}

export default MoviesPage
