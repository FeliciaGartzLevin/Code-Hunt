import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { Movie } from '../../types/MovieTypes'

type Props = {
	movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {
	const year = new Date(movie.release_date)
	const imgSize = 'w200'
	const slicedDesciption = movie.overview.slice(0, 70) + '...'

	return (
		<Col className='d-flex justify-content-center mx-1 my-3'>
			<Card bg='dark' text='light' style={{ width: '14rem' }}>
				<Link
					to={'/movie/' + movie.id}>
					{movie.poster_path && (<Card.Img variant="top" src={import.meta.env.VITE_IMG_URL + imgSize + movie.poster_path} />)}
				</Link>
				<Card.Body >
					<Card.Title>{movie.title}</Card.Title>
					<div className='mb-3'>
						<p className="d-flex justify-content-between text-secondary m-0">
							<span>
								Year: {year.getFullYear()}
							</span>
							<span>
								{movie.original_language.toUpperCase()}
							</span>
						</p>
						{slicedDesciption}
					</div>
					<Link
						to={'/movie/' + movie.id}>
						<Button variant="secondary">Go to movie &raquo;</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default MovieCard
