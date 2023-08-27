import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MovieCard from './MovieCard';

type Props = {
	movieArray: Movie[]
}

const MovieGrid: React.FC<Props> = ({ movieArray }) => {
	return (
		<Container fluid className="d-flex justify-content-center">
			{movieArray.length > 0 && (
				<Row className="d-flex justify-content-center">
					{movieArray.map(movie => (
						<MovieCard
							key={movie.id}
							movie={movie}
						/>
					)
					)}
				</Row>
			)}
		</Container>

	)
}

export default MovieGrid
