import React from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { Crew } from '../types/MovieTypes'

type Props = {
	crew: Crew[]
}

const MovieCrew: React.FC<Props> = ({ crew }) => {
	return (
		<>

			<h3>Crew</h3>
			{/* Crew table: */}
			<Container fluid className='scroll-bar-actors mb-3'>
				<Table variant='dark' striped bordered hover>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Job</th>
							<th>Known for department</th>
						</tr>
					</thead>
					<tbody>
						{crew && crew.map(crew => {
							return (
								<tr key={crew.id}>
									<td>{crew.name}</td>
									<td>{crew.job}</td>
									<td>{crew.known_for_department}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
			</Container>

		</>

	)
}


export default MovieCrew



