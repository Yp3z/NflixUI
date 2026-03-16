import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { Anime } from './pages/Anime'
import { Games } from './pages/Games'
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
        <Route path="/games" element={<Games />} />
        <Route path="/anime" element={<Anime />} />
        
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

