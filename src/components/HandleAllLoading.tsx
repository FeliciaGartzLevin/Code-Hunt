import { useIsFetching } from "@tanstack/react-query"
import Image from 'react-bootstrap/Image';
import Loading from '../assets/img/loading.gif'

const HandleAllLoading = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div id="loading-spinner-container" className="d-flex justify-content-center flex-column">
			<Image id="loading-img" src={Loading} />
		</div >
	) : null

}

export default HandleAllLoading
