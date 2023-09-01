import FilterButtons from '../../components/MoviePage/FilterButtons';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const SeeMoviesPage = () => {
	const [, setGetUrl] = useState<string>('')
	const customId = 1


	useEffect(() => {
		toast(
			<>
				<p>Would you rather find movies by genre?</p>
				<Link to={'/genres'}>
					<Button variant='secondary'>To genres &raquo;</Button>
				</Link>
			</>
			, { toastId: customId })
	}, [])

	return (
		<div id="MoviesPage" className="d-flex align-items-center flex-column">

			<h1 className='text-center text-md-start'>Movies</h1>

			<p>Click and choose your preference.</p>

			<FilterButtons
				choice={(url: string) => setGetUrl(url)}
			/>

		</div>
	)
}

export default SeeMoviesPage
