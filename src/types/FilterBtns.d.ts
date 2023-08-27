type FilterPreference =
	'latest' | /* ändra denna senare till rätt url-sökning */
	'popular' |
	'top_rated'

type FilterButton = {
	id: number,
	title: string,
	url: FilterPreference,
}
