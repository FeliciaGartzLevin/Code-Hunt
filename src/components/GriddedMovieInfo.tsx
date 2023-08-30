import React from 'react'
import Col from 'react-bootstrap/Col'

type Props = {
	title?: string,
	children: React.ReactNode
}

const GriddedMovieInfo: React.FC<Props> = ({ title, children }) => {
	return (

		<Col className='my-1 px-2' xs={6} s={4} >
			{title && <span><strong>{title}: </strong></span>}

			<span>{children}</span>
		</Col>

	)
}

export default GriddedMovieInfo
