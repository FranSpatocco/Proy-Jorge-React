import Button from "../../Components/Buttons/Button";
import "./Login.css"
import { useState } from "react";
import { handlerLogIn } from "../../Services/user";
import { Navigate } from "react-router-dom";


const Login = (props)=>{

const[formData,setFormData]=useState({});
    const[isOnNav,setIsOnNav]=useState(false);

    const handlerSubm = async (e) => {
        e.preventDefault();
        let rsp = await handlerLogIn(formData.user_name, formData.password);
        console.log(rsp);
        if (rsp.access_token !== undefined){
            props.setToken(rsp.access_token);
            setIsOnNav(true)
        }
    }
    return (
        <>
        {
            isOnNav && <Navigate to="/register" replace={true} />
        }
        <div class="body">  
            <div>
                <h1>Ingrese sus datos</h1>
            </div>
        <br />
            <form class="form-control">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="nombre de usuario" id="nombre" name="nombre" onChange={(e) => setFormData({ ...formData, user_name: e.target.value})}/>
                </div>
                <div class="mb-3">        
                    <input type="password" class="form-control" placeholder="contrasenia" id="password" name="password" onChange={(e) => setFormData({ ...formData, password: e.target.value})}/>
                </div>
                <button class="boton" onClick={handlerSubm}>Ingresar</button>
            </form>
        </div>
        </>
    )
}

export default Login;