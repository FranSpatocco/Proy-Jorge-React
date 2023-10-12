import { POST } from "./Httpr";

export const handlerLogIn = async (name, pass) => {

    let url = "/auth/login";
    let requestData = {
        user_name: name,
        password: pass
    }

    let rsp = await POST(url, requestData);

    return rsp;
}