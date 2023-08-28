import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { DetailedMovie } from '../types/MovieTypes'

type Props = {
	movieData: DetailedMovie
}

const MoviePresentation: React.FC<Props> = ({ movieData }) => {
	const imgSize = 'w200'

	return (
		<>
			<Container fluid className="d-flex ">
				<Row >
					<Col >
						{movieData.poster_path && (<Image src={import.meta.env.VITE_IMG_URL + imgSize + movieData.poster_path} />)}
						<h1>{movieData.title}</h1>

						{/* när jag visar actors till en movie: ta från cast de med 10-15 högst
popularity och visa deras bilder. Övrig cast kan jag rendera ut i en scrolllista*/}
					</Col>

				</Row>
			</Container>
		</>
	)
}

export default MoviePresentation
