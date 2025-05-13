import { useEffect } from "react";
import { useState } from "react"


//! == using empty Dependency 

// const UseEffect = ()=>{

//     const[count,setCount] = useState(0);

//     useEffect(()=>{
//         setCount(count+1)
//     },[])

//     return(
//         <div>
//             <h1>{count}</h1>
//         </div>
//     )
// }

// export default UseEffect


//! -- Second Condition -- using setTimeout


// const UseEffect = ()=>{

//     const[count,setCount] = useState(0);
//     const[hours,setHours] = useState(0);
//     const[minute,setMinute] = useState(0);

//     useEffect(()=>{
//         if(count == 60 ){
//             setCount(0)
//         }else{
//             setTimeout(()=>{
//                 setCount(count+1)
//             },1000)
//         }

//         if(minute == 60){
//             setMinute(0)
//         }else{
//             setTimeout(()=>{
//                 setMinute(minute+1)
//             },60000)
//         }

//         if(hours == 12){
//             setHours(0)
//         }else{
//             setTimeout(()=>{
//                 setHours(hours+1)
//             },3600000)
//         }
//     })

//     return(
//         <div id = "clock">
//             <h1>Clock</h1>
//             <h2>{hours} : {minute} : {count}</h2>
//         </div>
//     )
// }

// export default UseEffect


//! -- case 3 -- Dependency 

// const UseEffect = ()=>{

//     const[count,setCount] = useState(0);
//     const[init,setInit] = useState(0);

//     useEffect(()=>{
//         setCount(count+1)
//     },[init])

//     return(
//         <div>
//             <h1>Count : {count}</h1>

//             <h1>Init : {init}</h1>

//             <button onClick={()=>setInit(init+1)}>Incriment(init)</button>

//         </div>
//     )
// }

// export default UseEffect


//! --- Fectch the Api

import Eff1 from './Eff1'
const UseEffect = ()=>{
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
        <Eff1 data = {data} />
        </>
    )
}


export default UseEffect