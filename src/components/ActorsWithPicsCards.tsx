import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Cast } from '../types/MovieTypes'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

type Props = {
	actorsWithPics: Cast[]
}

const ActorsWithPicsCards: React.FC<Props> = ({ actorsWithPics }) => {
	const imgSize = 'w200'
	return (
		<Container fluid className='mb-3'>

			<Row className='d-flex flex-row'>

				{/* Actors with pictures */}
				{actorsWithPics && actorsWithPics.map(actor => {
					return (
						<Col key={actor.id} className='d-flex justify-content-center' style={{
							display: 'inline-block',
							float: 'none',
						}}>
							<Link to={'/actor/' + actor.id}>
								<Card className='mb-3 bg-dark text-white' style={
									{
										height: '13rem',
										width: '23rem',
										display: 'flex',
										flexDirection: 'row'
									}}>
									<Card.Img variant="row" src={import.meta.env.VITE_IMG_URL + imgSize + actor.profile_path} />
									<Card.Body>
										<Card.Title>{actor.name}</Card.Title>
										<Col>
											<ListGroup variant='flush' className="py-0">
												<ListGroup.Item variant='dark' className='bg-dark text-white' style={{
													fontWeight: 'lighter',
												}}>
													<strong>Character:</strong> {actor.character}
												</ListGroup.Item>
												<ListGroup.Item variant='dark' className='bg-dark text-white' style={{
													fontWeight: 'lighter',
												}}>
													<strong>Known for:</strong> {actor.known_for_department}
												</ListGroup.Item>
												<ListGroup.Item variant='dark' className='bg-dark text-white' style={{
													fontWeight: 'lighter',
												}}>
													<strong>Popularity:</strong> {actor.popularity}
												</ListGroup.Item>

											</ListGroup>
										</Col>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					)
				})}
			</Row>

		</Container >
	)
}

export default ActorsWithPicsCards
