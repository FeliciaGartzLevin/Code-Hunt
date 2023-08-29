

export type FilterButton = {
	id: number,
	title: string,
	url: string,
	search_params?: Search_Params
}

export type Search_Params = {
	with_release_type: string,
	sort_by: string,
	primary_release_date_lte: string,
}
