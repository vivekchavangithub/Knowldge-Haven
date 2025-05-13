

// const Child1 = ({data}) =>{
//     return(
//         <div>
//             {data.map((v,i) => (
//                 <div key ={i}><h1>{v.city}</h1></div>
//             ))}
//         </div>
//     )
// }


// export default Child1;



//! --- Task 2

// function view(){
    
// }

function Child1({data}){
    
    return(
        <>
        {
            data.map((v)=>(
                <div id = "card">
                    <img src={v.image} alt="" /><br></br><br></br>
                    <h5>{v.title}</h5><br></br>
                    <h2>Price : ${v.price}</h2>
                    <h3>Rating : {"⭐".repeat(Math.round((v.rating.rate)))}</h3><br></br>
                    <button >View</button>
                </div>
            ))
        }

        </>
    )
}

export default Child1;