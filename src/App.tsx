import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './assets/scss/App.scss'

//import pages
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import MoviesPage from './pages/MoviesPage'
import PeoplePage from './pages/PeoplePages'
import GenresPage from './pages/GenresPage'

const App = () => {
  return (
    <div id="App">
      <Navigation />

      <Container className="py-3">
        <Routes>
          <Route path='/' element={< HomePage />} />
          <Route path='/*' element={<NotFound />} />

          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/genres' element={<GenresPage />} />

        </Routes>
      </Container>

    </div>
  )
}

export default App