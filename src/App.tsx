import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { ToastContainer } from 'react-toastify'
import './assets/scss/App.scss'

//import pages
import Navigation from './components/Navigation'
import HomePage from './pages/overviewPages/HomePage'
import NotFound from './pages/overviewPages/NotFound'
import MoviesPage from './pages/overviewPages/MoviesPage'
import GenresPage from './pages/overviewPages/GenresPage'
import APICredPage from './pages/overviewPages/APICredPage'
import ActorPage from './pages/detailPages/ActorPage'
import MoviePage from './pages/detailPages/MoviePage'
import SeeMoviesPage from './pages/overviewPages/SeeMoviesPage'
import HandleAllLoading from './components/HandleAllLoading'

const App = () => {
	return (
		<div id="App">
			<Navigation />
			<HandleAllLoading />

			<ToastContainer />

			<Container className="py-3">
				<Routes>
					<Route path='/' element={< HomePage />} />
					<Route path='/*' element={<NotFound />} />

					<Route path='/movies' element={<MoviesPage />} />
					<Route path='/movies/:preferenceURL' element={<SeeMoviesPage />} />
					<Route path='/movie/:movieId' element={<MoviePage />} />

					<Route path='/actor/:actorId' element={<ActorPage />} />

					<Route path='/genres' element={<GenresPage />} />

					<Route path='/api' element={<APICredPage />} />

				</Routes>
			</Container>

			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</div>
	)
}

export default App
