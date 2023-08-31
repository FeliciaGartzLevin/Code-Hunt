import React from 'react'
import { ActorResponse } from '../types/ActorTypes'
import UpperActorGrid from './UpperActorGrid'


type Props = {
	actorData: ActorResponse
}

const ActorPresentation: React.FC<Props> = ({ actorData }) => {

	return (
		<>
			<UpperActorGrid
				actorData={actorData}
			/>
		</>
	)
}

export default ActorPresentation
