import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div id='HomePage' className='all-pages'>
			<h1>Welcome to Code Hunt!</h1>
			<p>
				Code Hunt is a school project in the continuation course in Javascript during my second year of the&nbsp;
				<Link to={'https://medieinstitutet.se/utbildningar/front-end-developer/'}>
					Front End Developer Vocational University program at Medieinstitutet
				</Link>.&nbsp;
				In this project, I retrieve data from TMDB's API using Tanstack Query. Other technologies used in addition to it include Typescript, React, React-Bootstrap, React Router and SCSS.			</p>


			<Link
				to={'/movies/'}>
				<Button variant="secondary">See movies</Button>
			</Link>

		</div>

	)
}

export default HomePage
