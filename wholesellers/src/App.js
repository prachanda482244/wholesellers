import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './pages/About'
import SearchResults from './pages/SearchResults'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={'Home'} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={'product'} />
        <Route path='/contact' element={'contact'} />
        <Route path='/cart' element={'Add too cart'} />
        <Route path='/user' element={'User login'} />
        <Route path='/search' element={<SearchResults />} />
      </Routes>
    </div>
  )
}

export default App
