import { useQuery } from '@tanstack/react-query'
import { getGenreList } from '../../services/TMDB-API'
import GenreSelect from '../../components/GenreSelect'

// filtrera enligt val
// uppdatera searchParams efter val som i Movies Page

const GenresPage = () => {

	const genreListQuery = useQuery(
		["genre-list"],
		getGenreList,
	)
	console.log(genreListQuery.data?.genres)

	// const movieByGenreQuery = useQuery

	return (
		<div id="GenresPage" className="all-pages">
			{
				genreListQuery.data &&
				<GenreSelect
					genreArray={genreListQuery.data?.genres}
				/>
			}
		</div>
	)
}

export default GenresPage
