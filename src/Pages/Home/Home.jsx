import { useState } from "react";
import "./Home.css";



const Home = (props)=>{
    const [data,setData] = useState([]);
    const handlerSubm = async (e) => {
        let rsp = await handlerSearch(data.search);
    }
    return (
        <>
        <div>
            <input type="text" class="form-control" placeholder="nombre de usuario" id="search" name="search" onChange={(e) => setData({ ...data, search: e.target.value})}/>
        </div>
        <div>
            <button type="submit" onClick={handlerSubm()}></button>
        </div>
            <div>
                <h1>
                    <ul class="list-group">
                    </ul>
                </h1>
            </div>
        </>
    );
}

export default Home;