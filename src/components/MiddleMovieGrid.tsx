import React from 'react'
import { DetailedMovie } from '../types/MovieTypes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
	movieData: DetailedMovie
}

const MiddleMovieGrid: React.FC<Props> = ({ movieData }) => {
	const popul = Math.floor(movieData.popularity)
	const arity = String(movieData.popularity).slice(String(movieData.popularity).lastIndexOf('.'))

	// counting runtime:
	const runtime = Number(movieData.runtime)
	const hours = Math.floor(runtime / 60)
	const minutes = runtime % 60
	return (

		<Container className="d-flex justify-content-center">
			<Row className="d-flex justify-content-between align-items-center flex-row" >
				<Col className='mx-3 d-flex justify-content-center'>

					<p>Runtime:&nbsp;
						<span className='hours'>{hours}</span>
						<span className='hours-hr'>hr{hours > 1 && 's'}</span>
						<sup className='minutesWrap'><span className='minutes'>{minutes}</span> mins</sup>
					</p>

				</Col >
				<Col className='mx-3 d-flex justify-content-center'>
					<p>Popularity:&nbsp;
						<span className='popul'>{popul}</span>
						<sub className='arity'>{arity}</sub>
					</p>

				</Col>
			</Row>
		</Container >
	)
}

export default MiddleMovieGrid
