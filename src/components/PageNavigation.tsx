import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';


type Props = {
	currentGenreId: string,
	currentPage: number,
	toLastOrFirstPage: (page: number) => void
	changeToPage: (page: number, currentGenreId: string) => void,
}

const PageNavigation: React.FC<Props> = ({ currentPage, changeToPage, currentGenreId, toLastOrFirstPage }) => {
	// the API allows max 500 pages
	const lastPage = 500
	const firstPage = 1
	return (
		<Container className='d-flex justify-content-center'>
			<Pagination >
				<Pagination.First className='pagination-component' disabled={currentPage === firstPage} onClick={() => toLastOrFirstPage(1)} />
				<Pagination.Prev disabled={currentPage <= firstPage} onClick={() => changeToPage(-1, currentGenreId)} />

				<Pagination.Item className='active'>{currentPage}</Pagination.Item>

				<Pagination.Next disabled={currentPage >= lastPage} onClick={() => changeToPage(+1, currentGenreId)} />
				<Pagination.Last disabled={currentPage === lastPage} onClick={() => toLastOrFirstPage(lastPage)} />
			</Pagination>
		</Container>
	)
}

export default PageNavigation
