import React from "react"
import Child1 from "./Child1"

//! ----- first way 

// const Child = (props)=>{
//     console.log(props);
//     return(
//         <div>
//             {props.data}
//         </div>
//     )
// }

//! -- using destructuring
// const Child = ({data}) =>{
//     return(
//         <div>
//             {data}
//         </div>
//     )
// }

// export default Child;


//! ---- accessing object 

// const Child = ({data}) =>{
//     console.log(data);
//     let emp = JSON.parse(localStorage.getItem("react"))
//     console.log(emp)
//     return(
//         <div>
//             <h1>Name : {data.name}</h1>
//             <h2>Age : {data.age}</h2>
//             <h3>State : {data.state}</h3>
//             <h1>Skills:</h1>
//             <ol>
//                 {data.skill.map((v,i)=>(
//                  <li key = {i} >{v}</li>
//                 ))}
//             </ol>
//         </div>
//     )
// }

// export default Child;


//! ------ 


// const Child = ({data})=>{
//     console.log(data)
//     return(
//        <>
//        {data.map((v)=>(
//            <div id="card">
//                <h1>Course Name: {v.course_name}</h1>
//                <h2>Traner Name: {v.trainer}</h2>
//                <h2>Price : {v.price}</h2>
//                <h2>Languages:</h2>
//                <ul>
//                    {v.languages.map((val)=>(
//                       <li>{val}</li>
//                    ))}
//                </ul>
//                <br></br>
//            </div>
//        ))}
//        </>
       
//     )
// }

// export default Child;


//! --- Task 2 -- image passing


// const Child = ({data}) =>{
//     console.log(data)
//     return(
//         <>
//             <img src={data} alt="" />
//         </>
//     )
// }

// export default Child;


//! --- Task 3

// const Child = ({data}) =>{
//     return(
//         <div>
//             {data.map((v,i) => (
//                 <div key ={i}><h1>{v.city}</h1></div>
//             ))}
//         </div>
//     )
// }


// export default Child;



//!  --- 


function Child({d1}){
    return(
        <>
            <Child1 data ={d1} />  
        </>
        

    )
}

export default Child;