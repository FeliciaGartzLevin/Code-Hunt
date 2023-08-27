import { useQuery } from '@tanstack/react-query'
import { getGenreList, getMoviesByPreference } from '../../services/TMDB-API'
import GenreSelect from '../../components/GenreSelect'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieGrid from '../../components/MovieGrid'

const GenresPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const q = searchParams.get("q") ?? ''
	// const [genreId, setGenreId] = useState<string | null>(q ?? '')

	const genreListQuery = useQuery(
		["genre-list"],
		getGenreList,
	)
	const moviesByGenreQuery = useQuery(
		["movies-by-genre"],
		() => getMoviesByPreference(q),
	)

	const handleChoice = (genreId: string) => {
		setSearchParams({ q: import.meta.env.VITE_MOVIE_BY_GENRE_URL + genreId })
		console.log('genreId recieved at highest level:', genreId)
	}

	useEffect(() => {
		moviesByGenreQuery.refetch()
	}, [q])

	return (
		<div id="GenresPage" className="all-pages">
			{genreListQuery.data &&
				<GenreSelect
					onChoice={handleChoice}
					genreArray={genreListQuery.data?.genres}
				/>
			}

			{moviesByGenreQuery.data && moviesByGenreQuery.data.results.length > 0 &&
				<MovieGrid
					movieArray={moviesByGenreQuery.data.results}
				/>
			}
		</div>
	)

}

export default GenresPage
