import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { DetailedMovie } from '../types/MovieTypes'
import InfoGrid from './InfoGrid'
import UpperMovieGrid from './UpperMovieGrid'

type Props = {
	movieData: DetailedMovie
}

const MoviePresentation: React.FC<Props> = ({ movieData }) => {

	// counting runtime:
	const runtime = Number(movieData.runtime)
	const hours = Math.floor(runtime / 60)
	const minutes = runtime % 60

	return (
		<>
			<UpperMovieGrid
				movieData={movieData}
			/>

			<Container className="d-flex justify-content-center">
				<Row className="d-flex justify-content-center flex-row" >
					<Col>
						<p>Popularity: {movieData.popularity}</p>
					</Col>
					<Col>
						<div>
							<p>Runtime:&nbsp;
								<span className='hours'>{hours}</span>
								hr
								<span className='minutes'>{minutes} </span>
								mins</p>
						</div>
					</Col>
				</Row>
			</Container>


			{/* när jag visar actors till en movie: ta från cast de med 10-15 högst
popularity och visa deras bilder. Övrig cast kan jag rendera ut i en scrolllista*/}

			<h2 className='h4'>Short movie Facts:</h2>
			<InfoGrid
				movieData={movieData}
			/>

			{/* <Container> */}

			{/* <p>Spoken languages: {movieData.spoken_languages.map()}</p> */}
			{/* <p>{movieData.credits.crew.map()}</p> */}
			{/* <p>{movieData.credits.cast.map()}</p> */}
			{/* <p>{movieData.production_companies.map()}</p> */}
			{/* </Container> */}

		</>
	)
}

export default MoviePresentation
