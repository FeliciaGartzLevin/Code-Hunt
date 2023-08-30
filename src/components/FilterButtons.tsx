import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import React from 'react'
import { FilterButton } from '../types/FilterBtns'
import { useNavigate } from 'react-router-dom'


const buttons: FilterButton[] = [
	{
		id: 1,
		title: 'trending',
		url: 'trending',
		queryUrl: import.meta.env.VITE_TRENDING_URL
	},
	{
		id: 2,
		title: 'most popular',
		url: 'popular',
		queryUrl: import.meta.env.VITE_POPULAR_URL
	},
	{
		id: 3,
		title: 'top rated',
		url: 'top_rated',
		queryUrl: import.meta.env.VITE_TOP_RATED_URL
	},

]
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
