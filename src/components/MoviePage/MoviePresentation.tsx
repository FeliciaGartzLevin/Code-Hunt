import React from 'react'
import { DetailedMovie } from '../../types/MovieTypes'
import InfoGrid from './InfoGrid'
import UpperMovieGrid from './UpperMovieGrid'
import MiddleMovieGrid from './MiddleMovieGrid'
import MovieCast from './MovieCast'
import MovieCrew from './MovieCrew'
import ProductionCompaniesGrid from './ProductionCompaniesGrid'

type Props = {
	movieData: DetailedMovie
}

const MoviePresentation: React.FC<Props> = ({ movieData }) => {

	return (
		<>
			<UpperMovieGrid
				movieData={movieData}
			/>

			<MiddleMovieGrid
				movieData={movieData}
			/>

			{movieData.credits.cast.length > 0 &&
				<MovieCast
					cast={movieData.credits.cast}
				/>}

			{movieData.credits.crew.length > 0 &&
				<MovieCrew
					crew={movieData.credits.crew}
				/>}

			<InfoGrid
				movieData={movieData}
			/>

			{movieData.production_companies.length > 0 && <ProductionCompaniesGrid
				production_companies={movieData.production_companies}
			/>}


		</>
	)
}

export default MoviePresentation
