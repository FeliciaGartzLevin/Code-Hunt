import React from 'react'

type Props = {
	tagline: string
}

const MovieTagLine: React.FC<Props> = ({ tagline }) => {
	return (
		<div id='quote-container'>
			<div className='start-quote'>
				<span className='quotes'>&bdquo;</span>
			</div>

			<span className='italic m-0'>{tagline}</span>

			<div className='end-quote'>
				<span className='quotes'>&bdquo;</span>
			</div>
		</div>
	)
}

export default MovieTagLine
