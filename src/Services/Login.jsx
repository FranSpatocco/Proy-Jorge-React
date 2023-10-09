const env = "http://192.168.0.69:3001/api/auth/"

export const LogIN = async (data)=>{
    return await fetch("http://192.168.0.69:3001/api/auth/login",{
        method: 'POST',
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)}
        .then((res) => res.json).then((res)=>console.log(res)))
    }