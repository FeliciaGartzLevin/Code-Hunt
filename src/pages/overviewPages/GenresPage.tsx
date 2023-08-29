import { useQuery } from '@tanstack/react-query'
import { getGenreList, getMoviesByPreference } from '../../services/TMDB-API'
import GenreSelect from '../../components/GenreSelect'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieGrid from '../../components/MovieGrid'
import { Genre } from '../../types/GenreTypes'
import Container from 'react-bootstrap/Container'
import { MovieResponse } from '../../types/MovieTypes'
// import { QueryClient } from '@tanstack/react-query'


const GenresPage = () => {
	// const queryClient = new QueryClient()
	const [searchParams, setSearchParams] = useSearchParams()
	const currentGenreId = searchParams.get("with_genres") ?? ''
	const [genre, setGenre] = useState<Genre | null>(null)
	const url = window.location.search

	console.log('currentGenreId:', currentGenreId)
	// console.log('url:', url)

	const genreListQuery = useQuery(
		["genre-list"],
		getGenreList,
	)

	const moviesByGenreQuery = useQuery(
		["movies-by-genre"],
		() => getMoviesByPreference<MovieResponse>(import.meta.env.VITE_MOVIE_BY_GENRE_URL + url),
	)

	// A reusing function to find the right genre from the url genre in
	// order to render the genre name on top of the movie results
	const findGenre = (id: string) => {
		if (!genreListQuery.data) return
		if (!genreListQuery.data.genres && !currentGenreId) return
		setGenre(genreListQuery.data.genres.find(genre => genre.id === Number(id)) ?? null)
	}

	// handling the click on 'confirm' after choosing a genre from the select-form
	const handleChoice = (genreId: string) => {
		setSearchParams({ page: String(1), sort_by: 'popularity.desc', with_genres: genreId })
		findGenre(genreId)
	}

	// refetching with new parameters when url is changing + finding genre name
	useEffect(() => {
		moviesByGenreQuery.refetch()
	}, [url])

	// finding current genre when moviesByGenreQuery is ready to be used in .find()
	useEffect(() => {
		findGenre(currentGenreId)
	}, [moviesByGenreQuery.isSuccess])

	return (
		<div id="GenresPage">
			<h1 className='text-center text-md-start'>Find movies by genre</h1>
			<p className='text-center text-md-start'>Please select a genre below and we'll show a list of the movies by that genre</p>

			{genreListQuery.data &&
				<GenreSelect
					genreIsLoading={moviesByGenreQuery.isLoading}
					onChoice={handleChoice}
					genreArray={genreListQuery.data?.genres}
				/>
			}
			{genre &&
				<Container>
					<h2 className='m-4 h4'>{genre.name}</h2>
				</Container>
			}

			{!moviesByGenreQuery.isStale && moviesByGenreQuery.data && moviesByGenreQuery.data.results.length > 0 &&
				<>
					<MovieGrid
						movieArray={moviesByGenreQuery.data.results}
					/>
				</>
			}
		</div>
	)

}

export default GenresPage
