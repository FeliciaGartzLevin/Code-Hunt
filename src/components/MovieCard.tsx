import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Poster from '../../src/assets/img/fight-club-poster.jpg'

type Props = {
	movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {
	const year = new Date(movie.release_date)

	return (
		// <Link
		<Col className='d-flex justify-content-center mx-1 my-3'>
			{/* Gör carden till Links */}
			<Card bg='dark' text='light' style={{ width: '14rem' }}>
				<Card.Img variant="top" src={Poster} />
				<Card.Body >
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>
						<p className="text-secondary m-0">
							Year: {year.getFullYear()}
						</p>
						{movie.overview.slice(0, 70) + '...'}
					</Card.Text>
					<Button variant="secondary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default MovieCard
