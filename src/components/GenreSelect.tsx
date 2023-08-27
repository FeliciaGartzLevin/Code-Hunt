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
			<h1 className='text-center text-md-start'>Search movie by genre</h1>
			<p className='text-center text-md-start'>Please select a genre below and we'll show a list of the movies by that genre</p>

			<Form onSubmit={handleSubmit}>
				<Form.Label className='small'>Choose genre</Form.Label>
				<Form.Group className='input-group m-auto'>
					<Form.Select onChange={e => setChosenGenreId(e.target.value)} title='choose-genre' aria-label="Choose a genre">
						<option>Genre</option>

						{genreArray.length > 0 && genreArray.map(genre => {
							// hur gör man en tvåvägsbindning här så att selecten visar
							// aktuellt filter även efter omladdning av sidan?
							// en useState? Men hur ska man då få rätt id om inte valuet visar det?
							// eller det gör det väl om man tar det från url:en?
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
