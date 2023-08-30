import { FilterButton } from "../types/FilterBtns"

const FilterButtonsArray: FilterButton[] = [
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

export default FilterButtonsArray
