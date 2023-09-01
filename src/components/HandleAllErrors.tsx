import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import ErrorImg from '../assets/img/cinema-fail.gif'

const HandleAllErrors = () => {

	return (
		<div className="d-flex justify-content-center flex-column">
			<Alert variant='warning' style={{
				borderLeft: 'solid 5px red',
			}}>
				An error occured.
			</Alert>
			<div>
				<Image src={ErrorImg} />
			</div>
		</div >
	)

}

export default HandleAllErrors
