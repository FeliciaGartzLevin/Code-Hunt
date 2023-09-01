import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ErrorImg from '../assets/img/cinema-fail.gif'

const HandleAllErrors = () => {

	return (
		<Container style={{
			width: '40rem',
		}}>
			<Col>
				<Alert variant='warning' style={{
					borderLeft: 'solid 5px red',
				}}>
					An error occured.
				</Alert>
				<div>
					<Image fluid src={ErrorImg} />
				</div>
			</Col>
		</Container >
	)

}

export default HandleAllErrors
