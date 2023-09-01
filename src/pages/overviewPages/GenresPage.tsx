import { useQuery } from '@tanstack/react-query'
import { getGenreList, getMoviesByPreference } from '../../services/TMDB-API'
import GenreSelect from '../../components/GenrePage/GenreSelect'
import { useSearchParams } from 'react-router-dom'
import MovieGrid from '../../components/MoviePage/Moviegrid'
import { MovieResponse } from '../../types/MovieTypes'
import PageNavigation from '../../components/PageNavigation'
import HandleAllErrors from '../../components/HandleAllErrors'

const GenresPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const currentGenreId = searchParams.get("with_genres") ?? ''
	const currentPage = searchParams.get("page") ?? 1
	const url = window.location.search

	const genreListQuery = useQuery(
		["genre-list"],
		getGenreList,
	)

	const moviesByGenreQuery = useQuery(
		["movies-by-genre", { currentGenreId }, { currentPage }],
		() => getMoviesByPreference<MovieResponse>(import.meta.env.VITE_MOVIE_BY_GENRE_URL + url),
	)

	// handling the click on 'confirm' after choosing a genre from the select-form
	const handleChoice = (genreId: string) => {
		setSearchParams({ page: String(1), sort_by: 'popularity.desc', with_genres: genreId })
	}

	// Functions for handling page switching
	const handlePagination = (directionNumber: number, currentGenreId: string) => {
		const pageNum = Number(currentPage) + directionNumber
		setSearchParams({ page: String(pageNum), with_genres: currentGenreId })
	}

	const toLastOrFirstPage = (page: number) => {
		setSearchParams({ page: String(page), with_genres: currentGenreId })
	}

	return (
		<div id="GenresPage">
			<h1 className='text-center text-md-start'>Find movies by genre</h1>
			<p className='text-center text-md-start'>Please select a genre below and we'll show a list of the movies by that genre</p>

			{!genreListQuery.isError && genreListQuery.data &&
				<GenreSelect
					currentGenreId={currentGenreId}
					onChoice={handleChoice}
					genreArray={genreListQuery.data?.genres}
				/>
			}

			{moviesByGenreQuery.isError &&
				<HandleAllErrors />
			}
			{genreListQuery.isError &&
				<HandleAllErrors />
			}

			{!moviesByGenreQuery.isError && moviesByGenreQuery.data && (
				<>
					{currentPage &&
						moviesByGenreQuery.data.total_pages &&
						currentGenreId &&
						(
							<PageNavigation
								currentGenreId={currentGenreId}
								currentPage={Number(currentPage)}
								changeToPage={handlePagination}
								toLastOrFirstPage={toLastOrFirstPage}
							/>
						)}

					{!moviesByGenreQuery.isStale && moviesByGenreQuery.data.results.length > 0 &&
						<>
							<MovieGrid
								movieArray={moviesByGenreQuery.data.results}
							/>
						</>
					}
				</>
			)
			}
		</div>
	)

}

export default GenresPage
