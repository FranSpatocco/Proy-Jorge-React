import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(null)
  const[token,setToken]=useState(null);

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login setToken={setToken} />} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
