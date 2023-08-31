import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';


type Props = {
	currentGenreId: string,
	currentPage: number,
	total_pages: number,
	toLastOrFirstPage: (page: number) => void
	changeToPage: (page: number, currentGenreId: string) => void,
}

const PageNavigation: React.FC<Props> = ({ currentPage, total_pages, changeToPage, currentGenreId, toLastOrFirstPage }) => {
	return (
		<Container className='d-flex justify-content-center'>
			<Pagination>
				<Pagination.First disabled={currentPage === 1} onClick={() => toLastOrFirstPage(1)} />
				<Pagination.Prev disabled={currentPage <= 1} onClick={() => changeToPage(-1, currentGenreId)} />

				<Pagination.Item className='active'>{currentPage}</Pagination.Item>


				<Pagination.Next disabled={currentPage >= total_pages} onClick={() => changeToPage(+1, currentGenreId)} />
				<Pagination.Last disabled={currentPage === total_pages} onClick={() => toLastOrFirstPage(total_pages)} />
			</Pagination>
		</Container>
	)
}

export default PageNavigation
