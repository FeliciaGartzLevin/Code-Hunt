import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { ActorResponse } from '../../types/ActorTypes'


type Props = {
	actorData: ActorResponse
}

const UpperActorGrid: React.FC<Props> = ({ actorData }) => {
	const imgSize = 'w300'
	const colSizingText = actorData.profile_path ? 6 : 12
	const colSizingImg = actorData.profile_path ? 6 : 0

	const getGender = (gender: number) => {
		if (gender === 1) return 'Female'
		else if (gender === 2) return 'Male'
		else if (gender === 3) return 'Non-binary'
		else return 'Not defined'
	}

	return (
		<div className='mb-3'>
			<Container fluid className="d-flex align-items-center flex-direction-column mb-3">
				<Row className="d-flex justify-content-center align-items-center" >
					<Col xl={colSizingImg} md={colSizingImg} sm={12} className=' mb-3 mr-3 d-flex justify-content-center' >
						{actorData.profile_path && (<Image src={import.meta.env.VITE_IMG_URL + imgSize + actorData.profile_path} />)}
					</Col>
					<Col xl={colSizingText} md={colSizingText} sm={12}>
						{actorData.name && <h1>{actorData.name}</h1>}
						{actorData.birthday && <p className='mb-0'><strong>Birthday:</strong> {actorData.birthday}</p>}
						{actorData.deathday && <p className='mb-0'><strong>Deathday:</strong> {actorData.deathday}</p>}
						<p className='mb-0'><strong>Gender:</strong> {getGender(actorData.gender)}</p>
						{actorData.place_of_birth && <p className='mb-0'><strong>Place of birth:</strong> {actorData.place_of_birth}</p>}
						{actorData.known_for_department && <p className='mb-0'><strong>Known for department:</strong> {actorData.known_for_department}</p>}
						{actorData.popularity && <p className='mb-0'><strong>Popularity:</strong> {actorData.popularity}</p>}

					</Col>
				</Row>
			</Container>
			{actorData.biography && (
				<Container>
					<Row className='mb-3'>

						<h2 className='h3'>Biography:</h2>
						<Col className='scroll-bar-actors' style={{
							maxHeight: '10rem',
						}}>
							<p className='mb-0'>{actorData.biography}</p>
						</Col>

					</Row>
				</Container>
			)}
		</div >
	)
}

export default UpperActorGrid
