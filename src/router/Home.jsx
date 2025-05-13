import { useEffect, useState } from "react";
import Banner from "./Banner";


const Home = () =>{
    const[data,setData] = useState()
    useEffect(()=>{

        fetch("https://fakestoreapi.com/products").then((v)=>{
            return v.json();
        }).then((val)=>{
            setData(val)
        })

    },[])

    return(
        <>
        <Banner/>
        <div id = "main">

        {data?.map((v,i) =>(
            <div id = "card" key={i}>
                <img src={v.image} alt="" />
                <p>{v.title}</p>
                <h3 >Price: {v.price}</h3>
                <button>View More</button>
            </div>
        ))}

    </div>
        </>
    )
    // return(
    //     <p>home</p>
    // )
}

export default Home