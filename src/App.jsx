import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { BannerInicio } from './components/BannerInicio'
import { ListaPopular } from './components/ListaPopular'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return ( 
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

