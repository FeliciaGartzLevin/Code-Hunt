import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import React from 'react'

type Props = {
	preference: string,
	filterChoice: (choice: string) => void
}

const today = new Date().toLocaleDateString()

const buttons: FilterButton[] = [
	{
		id: 1,
		title: 'latest',
		url: import.meta.env.VITE_LATEST_URL + today,
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

const FilterButtons: React.FC<Props> = ({ preference, filterChoice }) => {
	/* Preference ska göra en vit border runt det valda filtret */
	return (

		<Stack className='d-flex justify-content-center my-3' direction="horizontal" gap={3}>
			{buttons && buttons.map(btn => {
				const prefClass = preference === btn.url ? 'pref-border' : ''
				return (
					<Button
						key={btn.id}
						className={prefClass + ' px-3 py-1 filter-btns'}
						variant="secondary"
						onClick={() => filterChoice(btn.url)}
					>
						{btn.title}
					</Button>

				)
			})}

		</Stack >

	)
}

export default FilterButtons
