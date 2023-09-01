import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Genre } from '../../types/GenreTypes'


type Props = {
	genreArray: Genre[]
	onChoice: (genreId: string) => void
	genreIsLoading: boolean
}

const GenreSelect: React.FC<Props> = ({ genreArray, onChoice, genreIsLoading }) => {
	const [chosenGenre, setChosenGenre] = useState<string | null>(null)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('chosenGenre:', chosenGenre)

		if (!chosenGenre) return

		onChoice(chosenGenre)
	}

	return (
		<>
			<Form className='mb-4' onSubmit={handleSubmit}>
				<Form.Label htmlFor='select' title="label for the select" aria-label="label for the select" className='small label'>Choose genre</Form.Label>
				<Form.Group className='input-group m-auto' aria-labelledby='select'>
					<Form.Select id='select' name='select' onChange={e => setChosenGenre(e.target.value)} title="select" aria-label="Choose a genre">
						<option key={'choose-genre'} value={'choose'}>Genre</option>

						{genreArray.length > 0 && genreArray.map(genre => {
							return <option key={genre.id} value={genre.name}>{genre.name}</option>
						})}

					</Form.Select>

					<Button
						type='submit'
						variant='success'
					// disabled={}
					>
						Confirm
					</Button>
				</Form.Group>
			</Form>
		</>
	)
}

export default GenreSelect
