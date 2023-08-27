import { useQuery } from '@tanstack/react-query'
import { getGenreList } from '../../services/TMDB-API'
import GenreSelect from '../../components/GenreSelect'

// uppdatera searchParams efter val som i Movies Page

const GenresPage = () => {

	const genreListQuery = useQuery(
		["genre-list"],
		getGenreList,
	)
	const movieByGenreQuery = useQuery(
		["movies-by-genre"],
		getGenreList,
	)

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
