import FilterButtons from '../../components/FilterButtons';

import { useState } from 'react';

const SeeMoviesPage = () => {
	const [getUrl, setGetUrl] = useState<string>('')

	return (
		<div id="MoviesPage" className="">

			<h1 className='text-center text-md-start'>Movies</h1>

			<FilterButtons
				choice={(url: string) => setGetUrl(url)}
			/>

		</div>
	)
}

export default SeeMoviesPage
