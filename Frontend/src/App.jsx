import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import HomeLayout from './components/Layouts/HomeLayout'
import PropertyDetails from './components/PropertyDetails'
import About from './components/About'
import Login from './components/Login'

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />}/>
          <Route path='listings/:id' element={<PropertyDetails />} />
          <Route path='about' element={<About />}/>
          <Route path='login' element={<Login />}/>
        </Route>    
      </Routes>
    </BrowserRouter>
  )
}

export default App
