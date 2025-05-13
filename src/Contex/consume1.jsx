import { useContext } from "react"
import { contex } from "./contexApi"


// const Consume1 = () =>{
//     const data = useContext(contex)
//     return(
//         <h1>{data}</h1>
//     )
// }

// export default Consume1;

//! ----- Object fetch

const Consume1 = () =>{
    const data = useContext(contex)
    return(
        <h1>{data}</h1>
    )
}

export default Consume1;