import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import React from 'react'
import { FilterButton } from '../types/FilterBtns'
import { useNavigate } from 'react-router-dom'


const buttons: FilterButton[] = [
	{
		id: 1,
		title: 'in cinemas',
		url: 'now_playing'
	},
	{
		id: 2,
		title: 'most popular',
		url: 'popular'
	},
	{
		id: 3,
		title: 'top rated',
		url: 'top_rated',
	},

]
type Props = {
	currentUrl?: string
}

const FilterButtons: React.FC<Props> = ({ currentUrl }) => {

	const navigate = useNavigate()

	return (

		<Stack className='d-flex justify-content-center my-3' direction="horizontal" gap={3}>
			{buttons && buttons.map(btn => {

				const prefClasses = currentUrl === btn.url ? 'pref-border disabled' : ''

				return (
					<Button
						key={btn.id}
						className={prefClasses + ' px-3 py-1 filter-btns'}
						variant="secondary"
						onClick={() => navigate('/movies/' + btn.url)
						}
					>
						{btn.title}
					</Button>

				)
			})}
		</Stack >

	)
}

export default FilterButtons
