import Button from "../../Components/Buttons/Button";
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
            <form>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" onChange={(e)=>setFormData({...FormData,user_name:e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password" onChange={(e)=>setFormData({...FormData,password:e.target.value})}/>
                </div>

                <button class="btn btn-primary" onClick={handlerSubm}/>
            </form>
        </>
    )
}

export default Login;