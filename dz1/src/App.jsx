import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import PostPage from './pages/PostPage/PostPage'
import PostInfoPage from './pages/PostInfoPage/PostInfoPage'
import Layuot from './pages/Layout/Layout'
import DeletePost from './pages/DeletePost/DeletePost'
// import TranslatePage from './pages/TranslatePage/TranslatePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layuot />}>
        <Route index element={<MainPage />}/>
        <Route path='/posts' element={<PostPage />}/>
        <Route path='/posts/:id' element={<PostInfoPage />}/>
        <Route path='/delete/:id' element={<DeletePost/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Route>
      {/* <Route path='/trans' element={<TranslatePage />}/> */}
    </Routes>
    </>
  )
}

export default App
