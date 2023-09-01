import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getMoviesByPreference } from '../../services/TMDB-API'
import ActorPresentation from '../../components/ActorPage/ActorPresentation'
import { ActorResponse } from '../../types/ActorTypes'
import HandleAllErrors from '../../components/HandleAllErrors'


const ActorPage = () => {
	const { actorId } = useParams()

	const actorQuery = useQuery(
		['actor', actorId],
		() => getMoviesByPreference<ActorResponse>('/person/' + actorId + '?' + 'append_to_response=credits'),
		{ enabled: !!actorId && actorId?.length > 0 }
	)

	return (
		<div id='ActorPage' className='all-pages'>
			{actorQuery.isError &&
				<HandleAllErrors />
			}

			{!actorQuery.isError && actorQuery.data &&
				<ActorPresentation
					actorData={actorQuery.data}
				/>
			}
		</div>
	)
}

export default ActorPage
