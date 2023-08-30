import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import React from 'react'
import { FilterButton } from '../types/FilterBtns'
import { useNavigate } from 'react-router-dom'
import FilterButtonsArray from '../data/FilterBtnArray'


const buttons: FilterButton[] = FilterButtonsArray

type Props = {
	currentUrl?: string
	choice: (url: string) => void
}

const FilterButtons: React.FC<Props> = ({ currentUrl, choice }) => {

	const navigate = useNavigate()

	const handleChoice = (btn: FilterButton) => {
		choice(btn.queryUrl)
		navigate('/movies/' + btn.url)
	}
	return (

		<Stack className='d-flex justify-content-center my-3' direction="horizontal" gap={3}>
			{buttons && buttons.map(btn => {

				const prefClasses = currentUrl === btn.url ? 'pref-border disabled' : ''

				return (
					<>
						<Button
							key={btn.id}
							className={prefClasses + ' px-3 py-1 filter-btns'}
							variant="secondary"
							onClick={() => handleChoice(btn)}
						>
							{btn.title}
						</Button>

					</>

				)
			})}
		</Stack >

	)
}

export default FilterButtons
