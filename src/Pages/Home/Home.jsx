import { useState } from "react";
import "./Home.css";



const Home = (props)=>{
    const [data,setData] = useState([]);

    return (
        <div>
            <table class="table">
                <tbody>{
                    data.map((obj)=>{
                        <tr >
                            <th scope="row">{obj?.title}</th>
                            <td>{obj?.img}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Home;