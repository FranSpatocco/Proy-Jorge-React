import { useState } from "react";
import { create } from "../../Services/user";

const Register = (props) =>{
    const[formData,setFormData]=useState({});
    const handlerSubm = async (e) => {
        e.preventDefault();
        console.log(props)
        let rsp = await create(formData.user_name, formData.password, props?.token);

        
    }

    return(
        <>
            <form class="form-control">
                <div class="mb-3">
                    <label class="form-label">Ingrese nombre de usuario</label>
                    <input type="text" class="form-control" id="user_name" placeholder="nombre de usuario" onChange={(e) => setFormData({ ...formData, user_name: e.target.value})} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Ingrese Contraseña</label>
                    <input type="password" class="form-control" id="pass" placeholder="contraseña" onChange={(e) => setFormData({ ...formData, password: e.target.value})} />
                </div>
                <div class="mb-3">
                    <button type="submit" onClick={handlerSubm}>Crear</button>
                </div>
            </form>
        </>
    )
}


export default Register