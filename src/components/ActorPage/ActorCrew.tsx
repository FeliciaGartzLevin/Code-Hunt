import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { ActorCrew } from '../../types/ActorTypes'

type Props = {
	crew: ActorCrew[]
}

const ActorCasting: React.FC<Props> = ({ crew }) => {

	return (
		<>
			<h3>Crew in</h3>

			{/* Casting in-table: */}
			<Container fluid className='scroll-bar-actors mb-3'>
				<Table variant='dark' striped bordered hover>
					<thead>
						<tr>
							<th>Title</th>
							<th>Job</th>
							<th>Release date</th>
						</tr>
					</thead>
					<tbody>
						{crew && crew.map(project => {
							return (
								<tr key={project.credit_id}>
									<td><Link id='actor-links' to={'/movie/' + project.id}>{project.title}</Link></td>
									<td>{project.job}</td>
									<td>{project.release_date}</td>
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



