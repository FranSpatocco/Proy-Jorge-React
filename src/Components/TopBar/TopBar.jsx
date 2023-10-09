import { useState } from "react"
import Home from "../../Pages/Home/Home.jsx"
import Login from "../../Pages/Login/Login.jsx"

const MENUITEMS=[
    {
        pages: < Home /> ,
        title: "Home"
    },
    {
        pages: < Login /> ,
        title: "Login"
    }
]

const TopBar = (props)=>{
    const [router,setRouter]= useState(null);
    return (
        <>
        
        </>
    )
}