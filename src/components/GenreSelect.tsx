import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Genre } from '../types/GenreTypes'


type Props = {
	genreArray: Genre[]
	onChoice: (genreId: string) => void
}

const GenreSelect: React.FC<Props> = ({ genreArray, onChoice }) => {
	const [chosenGenreId, setChosenGenreId] = useState<string | null>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!chosenGenreId) return

		onChoice(chosenGenreId)
	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Label className='small label'>Choose genre</Form.Label>
				<Form.Group className='input-group m-auto'>
					<Form.Select id='select' onChange={e => setChosenGenreId(e.target.value)} title='choose-genre' aria-label="Choose a genre">
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
