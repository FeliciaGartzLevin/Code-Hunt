import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { DetailedMovie } from '../types/MovieTypes'
import { Link } from 'react-router-dom'

type Props = {
	movieData: DetailedMovie
}

const MoviePresentation: React.FC<Props> = ({ movieData }) => {
	const imgSize = 'w200'

	return (
		<>
			<Container fluid className="d-flex flex-direction-column">
				<Row className="d-flex flex-direction-row">
					<Col >
						{movieData.poster_path && (<Image src={import.meta.env.VITE_IMG_URL + imgSize + movieData.poster_path} />)}
					</Col>
					<Col>
						<h1>{movieData.title}</h1><span>{movieData.release_date}</span>

						<p>{movieData.tagline}</p>

						<p>{movieData.original_title}</p>
						<p>{movieData.original_language.toUpperCase()}</p>
					</Col>

					<Col>
						{movieData.genres.map((genre, index: number) => (
							<Link key={genre.id} to={'/genres?q=' + import.meta.env.VITE_MOVIE_BY_GENRE_URL + genre.id}>
								<span>{genre.name}
									{index === movieData.genres.length - 1 ? '' : ', '}
								</span>
							</Link>
						))}
					</Col>
				</Row>
				<Row className="d-flex flex-direction-row">
				</Row>

				{/* när jag visar actors till en movie: ta från cast de med 10-15 högst
popularity och visa deras bilder. Övrig cast kan jag rendera ut i en scrolllista*/}
			</Container>
		</>
	)
}

export default MoviePresentation
