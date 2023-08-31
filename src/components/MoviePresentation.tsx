import React from 'react'
import { DetailedMovie } from '../types/MovieTypes'
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

			{/* när jag visar actors till en movie: ta från cast de med 10-15 högst
			popularity och visa deras bilder. Övrig cast kan jag rendera ut i en scrolllista*/}

			<MovieCast
				cast={movieData.credits.cast}
			/>

			<MovieCrew
				crew={movieData.credits.crew}
			/>

			<InfoGrid
				movieData={movieData}
			/>

			<ProductionCompaniesGrid
				production_companies={movieData.production_companies}
			/>


		</>
	)
}

export default MoviePresentation
