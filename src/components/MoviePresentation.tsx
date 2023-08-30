import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { DetailedMovie } from '../types/MovieTypes'
import { Link } from 'react-router-dom'
import MovieTagLine from './MovieTagLine'

type Props = {
	movieData: DetailedMovie
}

const MoviePresentation: React.FC<Props> = ({ movieData }) => {
	const imgSize = 'w300'

	return (
		<>
			<Container fluid className="d-flex align-items-center flex-direction-column">
				<Row className="d-flex justify-content-center" >
					<Col xl={4} md={6} sm={12} className=' mb-3 mr-3
					d-flex
					justify-content-center
					' >
						{movieData.poster_path && (<Image src={import.meta.env.VITE_IMG_URL + imgSize + movieData.poster_path} />)}
					</Col>
					<Col xl={6} md={6} sm={12}>
						<h1>{movieData.title}</h1>
						<p className='mb-0'>Release date: {movieData.release_date}</p>

						<MovieTagLine
							tagline={movieData.tagline}
						/>

						{/* movieData.original_title !== movieData.title && */ //kommentera tillbaks detta när layout är klar
							<p>Original title: {movieData.original_title}</p>
						}
						<p>Original language: {movieData.original_language.toUpperCase()}</p>
						<p>Genres:&nbsp;    {/* just a space */}
							{movieData.genres.map((genre, index: number) => (
								<Link key={genre.id} to={'/genres?page=1&sort_by=popularity.desc&with_genres=' + String(genre.id)}>
									<span>{genre.name}
										{index === movieData.genres.length - 1 ? '' : ', '}
									</span>
								</Link>
							))}
						</p>
						<p>{movieData.overview}</p>
					</Col>
				</Row>
			</Container>

			{/* när jag visar actors till en movie: ta från cast de med 10-15 högst
popularity och visa deras bilder. Övrig cast kan jag rendera ut i en scrolllista*/}
			<Container fluid className="d-flex align-items-center flex-direction-column">

				<Row className="d-flex flex-direction-column">
					<p>Budget: {movieData.budget}</p>
					<p>Homepage: <a href={movieData.homepage}>{movieData.homepage}</a></p>
				</Row>
			</Container>

		</>
	)
}

export default MoviePresentation
