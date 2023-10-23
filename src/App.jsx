import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register.jsx';
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function App() {

  const[token,setToken]=useState(null);
  const[isLoged, setIsLoged] = useState(false);

    useEffect(()=>{
      let jwd = localStorage.getItem("token")
      if(jwd){
        setIsLoged(true);
      }else{
        setIsLoged(false);
      }
    }, []);
  
  return (
    
    <BrowserRouter>
          {
          isLoged ?
            <Navigate to="/home" replace={true} />
            :
            <Navigate to="/" replace={true} />
          }
          <Routes>
            <Route path='/' element={<Login setToken={setToken} />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/register' element={<Register token={token} />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
