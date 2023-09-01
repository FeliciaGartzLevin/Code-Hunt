import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { DetailedMovie } from '../types/MovieTypes'
import MovieTagLine from './MovieTagLine'


type Props = {
	movieData: DetailedMovie
}

const UpperMovieGrid: React.FC<Props> = ({ movieData }) => {
	const imgSize = 'w300'

	return (
		<Container fluid className="d-flex flex-direction-column">
			<Row className="d-flex justify-content-center" >
				<Col xl={4} md={6} sm={12} className=' mb-3 mr-3 d-flex justify-content-center' >
					{movieData.poster_path && (<Image src={import.meta.env.VITE_IMG_URL + imgSize + movieData.poster_path} />)}
				</Col>
				<Col xl={6} md={6} sm={12}>
					<h1>{movieData.title}</h1>
					<p className='mb-0'>Release date: {movieData.release_date}</p>

					<MovieTagLine
						tagline={movieData.tagline}
					/>

					<p>Original language: <span className='h6'>
						{movieData.original_language.toUpperCase()}
					</span>
					</p>
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
	)
}

export default UpperMovieGrid
