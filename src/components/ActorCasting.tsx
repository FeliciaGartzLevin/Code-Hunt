import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { ActorCast } from '../types/ActorTypes'

type Props = {
	cast: ActorCast[]
}

const ActorCasting: React.FC<Props> = ({ cast }) => {

	return (
		<>
			<h3>Acting in</h3>

			{/* Casting in-table: */}
			<Container fluid className='scroll-bar-actors mb-3'>
				<Table variant='dark' striped bordered hover>
					<thead>
						<tr>
							<th>Title</th>
							<th>Release date</th>
							<th>Average vote</th>
						</tr>
					</thead>
					<tbody>
						{cast && cast.map(movie => {
							return (
								<tr key={movie.credit_id}>
									<td><Link id='actor-links' to={'/movie/' + movie.id}>{movie.title}</Link></td>
									<td>{movie.release_date}</td>
									<td>{movie.vote_average}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</Container>

		</>

	)
}


export default ActorCasting



