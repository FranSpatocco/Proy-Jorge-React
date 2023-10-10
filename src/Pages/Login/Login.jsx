import Button from "../../Components/Buttons/Button";
import "./Login.css"
import { useState } from "react";
import { LogIN } from "../../Services/Login.jsx"


const Login = ()=>{


   // const redirect = (e) => {
     //   console.log("asd")
       // window.location.replace("/home");
    //}

const[formData,setFormData]=useState({});

    const handlerSubm = async (e) => {
        e.preventDefault();

        await LogIN(formData);
    }

    return (
        <>
        <div class="body">  
            <div>
                <h1>Ingrese sus datos</h1>
            </div>
        <br />
            <form class="form-control">
                <div class="mb-3">
                    
                    <input type="text" class="form-control" placeholder="nombre de usuario" id="nombre" name="nombre" onChange={(e)=>setFormData({...FormData,user_name:e.target.value})}/>
                </div>
                <div class="mb-3">
                    
                    <input type="password" class="form-control" placeholder="contrasenia" id="password" name="password" onChange={(e)=>setFormData({...FormData,password:e.target.value})}/>
                </div>

                <button class="boton" onClick={handlerSubm}>Ingresar</button>
            </form>
        </div>
        </>
    )
}

export default Login;