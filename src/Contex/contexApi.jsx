import { createContext, useEffect, useState } from "react";

export const contex = createContext();


// const ContexApi = ({children}) =>{
    
//     return(

//         <contex.Provider value="Jspider">
//             {children}
//         </contex.Provider>

//     )
// }

// export default ContexApi


//! ------ Object transfer


// const ContexApi = ({children}) =>{

    // let emp = {
    //     name : "Vivek",
    //     age : 22,
    //     skill:["HTML",", CSS",", JS",", Reactjs"]
    // }

    
//     return(

//         <contex.Provider value={data}>
//             {children}
//         </contex.Provider>

//     )
// }

// export default ContexApi

//! --- 

const ContexApi = ({children}) =>{

    const[data,setData] = useState()
    useEffect(()=>{

        fetch("https://fakestoreapi.com/products").then((v)=>{
            return v.json();
        }).then((val)=>{
            setData(val)
        })

    },[])
    
    return(

        <contex.Provider value={data}>
            {children}
        </contex.Provider>

    )
}

export default ContexApi