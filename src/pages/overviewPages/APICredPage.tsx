import { Link } from 'react-router-dom'

const APICredPage = () => {
	return (
		<div id="APICredPage" className="all-pages">
			<h1>The Movie Data Base API</h1>
			<p>
				All data in this website is from&nbsp;
				<Link to={'https://developer.themoviedb.org/reference/intro/getting-started'}>
					The Movie Database API
				</Link>
			</p>
		</div>)
}

export default APICredPage
