import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { Cast } from '../types/MovieTypes'
import { Link } from 'react-router-dom'
import ActorsWithPicsCards from './ActorsWithPicsCards'

type Props = {
	cast: Cast[]
}

const MovieCast: React.FC<Props> = ({ cast }) => {
	const imgSize = 'w200'
	const actorsWithPics = cast.filter(actor => actor.order < 9)
	const actorsWithoutPics = cast.filter(actor => actor.order >= 9)

	return (
		<>
			<h3 className=''>Cast</h3>
			<ActorsWithPicsCards
				actorsWithPics={actorsWithPics}
			/>

			{/* Actors wihout pics table: */}
			<Container fluid className='scroll-bar-actors mb-3'>
				<Table variant='dark' striped bordered hover>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Character</th>
							<th>Popularity</th>
						</tr>
					</thead>
					<tbody>
						{actorsWithoutPics && actorsWithoutPics.map(actor => {
							return (
								<tr>
									<td><Link id='actor-links' to={'/actor/' + actor.id}>{actor.name}</Link></td>
									<td>{actor.character}</td>
									<td>{actor.popularity}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</Container>

		</>

	)
}


export default MovieCast



