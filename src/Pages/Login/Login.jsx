import Button from "../../Components/Buttons/Button";

const Login = ()=>{


    const redirect = (e) => {
        console.log("asd")
        window.location.replace("/home");
    }



    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" name="nombre"/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password"/>
                </div>
                <Button callBack={redirect} />
            </form>
        </>
    )
}

export default Login;