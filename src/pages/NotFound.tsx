import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div id="NotFoundPage" className="all-pages">
			<h1>No such page</h1>

			<Link to="/">
				<Button variant="primary">Back to homepage</Button>
			</Link>
		</div>

	)
}

export default NotFound
