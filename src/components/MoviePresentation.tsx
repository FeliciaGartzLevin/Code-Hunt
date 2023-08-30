import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { DetailedMovie } from '../types/MovieTypes'
import InfoGrid from './InfoGrid'
import UpperMovieGrid from './UpperMovieGrid'
import MiddleMovieGrid from './MiddleMovieGrid'

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

			<h2 className='h4' > Short movie Facts:</h2>
			<InfoGrid
				movieData={movieData}
			/>

			{/* <Container> */}

			{/* <p>{movieData.credits.crew.map()}</p> */}
			{/* <p>{movieData.credits.cast.map()}</p> */}
			{/* <p>{movieData.production_companies.map()}</p> */}
			{/* </Container> */}

		</>
	)
}

export default MoviePresentation
