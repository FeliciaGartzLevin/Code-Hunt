import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div id='HomePage' className='all-pages'>
			<Row className='d-flex justify-content-center'>
				<Col xl={6} md={8}>
					<h1>Welcome to the Code Hunt!</h1>
					<p>
						Code Hunt is a school project in the continuation course in Javascript during my second year of the&nbsp;
						<Link to={'https://medieinstitutet.se/utbildningar/front-end-developer/'}>
							Front End Developer Higher Vocational Education (HVE) program at Medieinstitutet
						</Link>.&nbsp;
						In this project, I retrieve data from TMDB's API using Tanstack Query. Other technologies used in addition to it include Typescript, React, React-Bootstrap, React Router and SCSS.			</p>


					<Link
						to={'/movies/'}>
						<Button variant="secondary">See movies</Button>
					</Link>
				</Col>
			</Row>

		</div>

	)
}

export default HomePage
