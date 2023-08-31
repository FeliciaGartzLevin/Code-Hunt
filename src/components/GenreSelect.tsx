import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Genre } from '../types/GenreTypes'


type Props = {
	genreArray: Genre[]
	onChoice: (genreId: string) => void
	genreIsLoading: boolean
}

const GenreSelect: React.FC<Props> = ({ genreArray, onChoice, genreIsLoading }) => {
	const [chosenGenreId, setChosenGenreId] = useState<string | null>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!chosenGenreId) return

		onChoice(chosenGenreId)
	}

	return (
		<>
			<Form className='mb-4' onSubmit={handleSubmit}>

				<Form.Label id='select' className='small label'>Choose genre</Form.Label>
				<Form.Group className='input-group m-auto' aria-labelledby='select'>
					<Form.Select onChange={e => setChosenGenreId(e.target.value)} title="choose-genre" aria-label="Choose a genre">
						<option>Genre</option>

						{genreArray.length > 0 && genreArray.map(genre => {
							return <option key={genre.id} value={genre.id}>{genre.name}</option>
						})}

					</Form.Select>

					<Button
						type='submit'
						variant='success'
						disabled={genreIsLoading}
					>
						Confirm
					</Button>
				</Form.Group>
				{/* </Form.Label> om denna ligger här ist blir select-rutan smalare */}
			</Form>
		</>
	)
}

export default GenreSelect
