import React from 'react'
import { ActorResponse } from '../types/ActorTypes'
import UpperActorGrid from './UpperActorGrid'
import ActorCasting from './ActorCasting'
import ActorCrew from './ActorCrew'


type Props = {
	actorData: ActorResponse
}

const ActorPresentation: React.FC<Props> = ({ actorData }) => {

	return (
		<>
			<UpperActorGrid
				actorData={actorData}
			/>

			<ActorCasting
				cast={actorData.credits.cast} />

			<ActorCrew
				crew={actorData.credits.crew}
			/>
		</>
	)
}

export default ActorPresentation
