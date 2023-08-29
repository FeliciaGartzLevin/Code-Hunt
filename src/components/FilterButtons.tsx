import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import React from 'react'
import { FilterButton } from '../types/FilterBtns'


const buttons: FilterButton[] = [
	{
		id: 1,
		title: 'in cinemas',
		url: import.meta.env.VITE_NOW_PLAYING_URL,
	},
	{
		id: 2,
		title: 'most popular',
		url: import.meta.env.VITE_POPULAR_URL
	},
	{
		id: 3,
		title: 'top rated',
		url: import.meta.env.VITE_TOP_RATED_URL
	},

]

type Props = {
	// preference: string,
	filterChoice: (chosenBtn: FilterButton) => void
	// choicesArray:
}

const FilterButtons: React.FC<Props> = ({ /* preference, */ filterChoice }) => {
	// const [borderClass, setBorderClass] = useState<string>('')

	const handleClick = (btn: FilterButton) => {
		filterChoice(btn)

		// setBorderClass()
	}

	return (

		<Stack className='d-flex justify-content-center my-3' direction="horizontal" gap={3}>
			{buttons && buttons.map(btn => {
				// måste ändra denna för den funkar inte längre efter ändrad kod med search params:
				// const prefClass = preference === btn.url ? 'pref-border disabled' : ''

				return (
					<Button
						key={btn.id}
						className={/* prefClass +  */' px-3 py-1 filter-btns'}
						variant="secondary"
						onClick={() => handleClick(btn)}
					>
						{btn.title}
					</Button>

				)
			})}
		</Stack >

	)
}

export default FilterButtons
