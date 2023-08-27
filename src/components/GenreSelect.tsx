import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Genre } from '../types/GenreTypes'


type Props = {
	genreArray: Genre[]
}

const GenreSelect: React.FC<Props> = ({ genreArray }) => {
	const [chosenGenreId, setChosenGenreId] = useState<string | null>(null)


	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		console.log()
	}

	return (
		<>
			<h1 className='text-center text-md-start'>Search movie by genre</h1>
			<p className='text-center text-md-start'>Choose a genre from the list and we'll show it to you</p>

			<Form onSubmit={handleSubmit}>
				<Form.Label className='small'>Choose genre</Form.Label>
				<Form.Group className='input-group'>
					<Form.Select onChange={e => setChosenGenreId(e.target.value)} title='choose-genre' aria-label="Choose a genre">
						<option>Genre</option>

						{genreArray.length > 0 && genreArray.map(genre => {
							return <option key={genre.id} value={genre.id}>{genre.name}</option>
						})}

					</Form.Select>

					<Button
						type='submit'
						variant='success'
					// disabled={when data is loading}
					>
						Confirm
					</Button>
				</Form.Group>
			</Form>
		</>
	)
}

export default GenreSelect
