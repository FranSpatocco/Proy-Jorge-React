import { json } from "react-router-dom";

const backendURL = "http://192.168.0.161:3001/api"


export const POST = async (url, requestData, token = "") => {

    console.log(requestData);

    return await fetch(backendURL + url, {
        method:"POST",
        mode:"cors",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}` || ""
        },
        body: JSON.stringify(requestData)
    })
    .then((res) => res)
    .then((res) => res.json())
    .catch((err) => err);
;

}