import { POST,GET } from "./Httpr";

export const handlerLogIn = async (name, pass) => {

    let url = "/auth/login";
    let requestData = {
        user_name: name,
        password: pass
    }

    let rsp = await POST(url, requestData);

    return rsp;
}

export const create = async (name, pass, token) => {

    let url = "/user/create";
    let requestData = {
        user_name: name,
        password: pass
    }

    let rsp = await POST(url, requestData, token);

    return rsp;
}

export const GETUSER = async () => {
    let url="/user/search"
    let requestData = {
        user_name: "",
        password: pass
    }

    
}
