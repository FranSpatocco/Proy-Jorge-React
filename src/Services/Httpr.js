import { json } from "react-router-dom";

const backendURL = "http://192.168.0.161:3001/api"


export const POST = async (url, requestData, token = "") => {

    console.log(requestData);

    return await fetch(backendURL + url, {
        method:"POST",
        mode:"cors",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem('access_token')}` || ""
        },
        body: JSON.stringify(requestData)
    })
    .then((res) => res)
    .then((res) => res.json())
    .catch((err) => err);
;

}

export async function GET(url, request = null){

    let uri = "";
    if(request){
        uri = '?' + new URLSearchParams(request).toString(); 
    }

    return await fetch(backendurl + url + uri, {
        method:'GET',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('access_token')}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}