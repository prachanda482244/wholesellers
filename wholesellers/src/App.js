import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={'Home'} />
        <Route path='/about' element={'About'} />
        <Route path='/products' element={'product'} />
        <Route path='/contact' element={'contact'} />
        <Route path='/cart' element={'Add too cart'} />
        <Route path='/user' element={'User login'} />
        <Route path='/search' element={'search'} />
      </Routes>
    </div>
  )
}

export default App
