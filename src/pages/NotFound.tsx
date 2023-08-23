import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<h1>No such page</h1>

			<Link to="/">
				<Button variant="primary">Back to homepage</Button>
			</Link>
		</>
	)
}

export default NotFound
