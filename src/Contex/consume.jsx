import { useContext } from "react"
import { contex } from "./contexApi"

// const Consume = () =>{
//     const data = useContext(contex);
//     return(
//         <h1>{data}</h1>
//     )
// }

// export default Consume;

//! ---- object

// const Consume = () => {
//     const data = useContext(contex);
//     return (
//         <>
//             <h1>Name : {data.name}</h1>
//             <h1>Age : {data.age}</h1>
//             <h1>Skills : {data.skill}</h1>
//         </>
//     )
// }

// export default Consume;

//! --- Api fetch



const Consume = () => {
    const data = useContext(contex);
     
    function view(i) {
        let product = data[i]
        return (
            <div id="card" key={i}>
                <img src={product.image} alt="" />
                <h3 >{product.title}</h3><br></br>
                <h2 >Price: {product.price}</h2><br></br>
                <p>Discription: {product.description}</p>
            </div>
        )
    }

    return (
        <div id="main">

            {data?.map((v, i) => (
                <div id="card" key={i}>
                    <img src={v.image} alt="" />
                    <h3 >{v.title}</h3><br></br>
                    <h2 >Price: {v.price}</h2><br></br>
                    <button onClick={view(i)}>View More</button>
                </div>
            ))}

        </div>
    )
}

export default Consume;