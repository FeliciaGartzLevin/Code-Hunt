import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Cast } from '../types/MovieTypes'
import { Link } from 'react-router-dom'

type Props = {
	cast: Cast[]
}



/* 					 {cast && cast.map(actor => {

						return (
							<p key={actor.id}>{actor.name}</p>
						)
					})}  */

const MovieCast: React.FC<Props> = ({ cast }) => {
	const imgSize = 'w200'
	const actorsWithPics = cast.filter(actor => actor.order < 10)
	// console.log('actorsWithPics:', actorsWithPics)
	// console.log('cast:', cast)

	return (
		<Container fluid>

			<Row className='d-flex flex-row' style={
				{
					overflow: 'auto',
					whiteSpace: 'nowrap',
				}
			}>


				{actorsWithPics && actorsWithPics.map(actor => {
					return (
						<Col style={{
							display: 'inline-block',
							float: 'none',
						}}>
							<Link to={'/actor/' + actor.id}>
								<Card key={actor.id} className='mb-3' style={
									{
										height: '13rem',
										width: '20rem',
										display: 'flex',
										flexDirection: 'row'
									}}>
									<Card.Img variant="row" src={import.meta.env.VITE_IMG_URL + imgSize + actor.profile_path} />
									<Card.Body>
										<Card.Title>{actor.name}</Card.Title>
										<Card.Text >
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													<strong>Character:</strong> {actor.character}
												</li>
												<li className="list-group-item">
													<strong>Known for:</strong> {actor.known_for_department}
												</li>

											</ul>
										</Card.Text>
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


export default MovieCast



