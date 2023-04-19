import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import PokemonPage from './pages/PokemonPage/PokemonPage'
import PokemonInfoPage from './pages/PokemonInfoPage/PokemonInfoPage'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li><NavLink to={"/"}>MainPage</NavLink></li>
        <li><NavLink to={"/pokemon"}>pokemons</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/pokemon' element={<PokemonPage />}/>
      <Route path='/pokemon/:id' element={<PokemonInfoPage />}/>
    </Routes>
    </>
  )
}

export default App
