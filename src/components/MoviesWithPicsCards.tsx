import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import { ActorCast } from '../types/ActorTypes'

type Props = {
	actorMovies: ActorCast[]
}

const ActorsWithPicsCards: React.FC<Props> = ({ actorMovies }) => {
	const imgSize = 'w200'

	return (
		<Container fluid className='mb-3 actor-cards-container'>

			<Row className='d-flex flex-row actors-card-body-scroll side-scroll justify-content-lg-start'>

				{/* Actors with pictures */}
				{actorMovies && actorMovies.map(movie => {
					const releaseYear = new Date(movie.release_date).getFullYear()
					return (
						<Col key={movie.id} className='d-flex justify-content-center'>
							<Card className='mb-3 bg-dark text-white d-flex align-items-center' style={
								{
									height: '13rem',
									width: '23rem',
									display: 'flex',
									flexDirection: 'row'
								}}>
								<Link to={'/actor/' + movie.id} >
									{movie.poster_path && <Card.Img variant="row" src={import.meta.env.VITE_IMG_URL + imgSize + movie.poster_path} style={{
										height: '13rem',
									}} />}
								</Link>

								<Card.Body className='actors-card-body-scroll' style={{
									maxHeight: '13rem',
									overflowY: 'scroll',
								}}>
									<Link id='actor-card-links' to={'/actor/' + movie.id} >
										<Card.Title>{movie.title}</Card.Title>
									</Link>

									<Col>
										<ListGroup variant='flush' className="py-0">
											<ListGroup.Item variant='dark' className='bg-dark text-white' style={{
												fontWeight: 'lighter',
											}}>
												<strong>Character:</strong> {movie.character}
											</ListGroup.Item>
											<ListGroup.Item variant='dark' className='bg-dark text-white' style={{
												fontWeight: 'lighter',
											}}>
												<strong>Released:</strong> {releaseYear}
											</ListGroup.Item>

										</ListGroup>
									</Col>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
			</Row>

		</Container >
	)
}

export default ActorsWithPicsCards
