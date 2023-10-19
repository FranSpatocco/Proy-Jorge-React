import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register.jsx';

function App() {

  const[token,setToken]=useState(null);
  
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login setToken={setToken} />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/register' element={<Register token={token} />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
