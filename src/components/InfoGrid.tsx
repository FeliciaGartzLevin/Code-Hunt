import React from 'react'
import { DetailedMovie } from '../types/MovieTypes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GriddedMovieInfo from './GriddedMovieInfo'

type Props = {
	movieData: DetailedMovie
}

const InfoGrid: React.FC<Props> = ({ movieData }) => {

	const spoken_lang = movieData.spoken_languages.map((lang, index: number) => (
		<span key={lang.iso_639_1}>{lang.name}
			{index === movieData.spoken_languages.length - 1 ? '' : ', '}
		</span>
	))

	return (
		<div className='mb-3'>
			<h3 > Short movie facts:</h3>

			<Container fluid className="info-grid d-flex align-items-center flex-direction-column">
				<Row className="d-flex justify-content-start">
					{movieData.budget && <GriddedMovieInfo
					>
						<span><strong>Budget: </strong></span>
						<span>${movieData.budget.toLocaleString()}</span>
					</GriddedMovieInfo>
					}

					{movieData.homepage && <GriddedMovieInfo>
						<a href={movieData.homepage}>Homepage</a>
					</GriddedMovieInfo>
					}

					{movieData.original_title &&
						<GriddedMovieInfo
							title='Original title'>
							'{movieData.original_title}'
						</GriddedMovieInfo>
					}
					{spoken_lang &&
						<GriddedMovieInfo
							title='Spoken languages'>
							{spoken_lang}
						</GriddedMovieInfo>
					}
					{movieData.revenue && <GriddedMovieInfo
						title='Revenue'>
						${movieData.revenue.toLocaleString()}
					</GriddedMovieInfo>
					}

					{movieData.status && <GriddedMovieInfo
						title='Status'>
						{movieData.status}
					</GriddedMovieInfo>
					}
					{movieData.popularity && <GriddedMovieInfo
						title='Average vote'>
						{movieData.popularity}
					</GriddedMovieInfo>
					}
					{movieData.vote_count && <GriddedMovieInfo
						title='Vote count'>
						{movieData.vote_count} votes
					</GriddedMovieInfo>
					}
				</Row>
			</Container >
		</div>
	)
}

export default InfoGrid
