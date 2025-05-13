import React, { useEffect, useState } from "react";
import { useRef } from "react"



// const Reff = ()=>{
//     const elem = useRef();
//     console.log(elem)

//     useEffect(()=>{
//         elem.current.focus()
//         elem.current.style.backgroundColor = "red"
//     })

//     return(
//         <div>
//             <label htmlFor="">Name</label>
//             <input type="text" ref={elem}/><br></br>
//             <label htmlFor="">Email</label>
//             <input type="text" ref={elem} />


//         </div>
//     )
// }


// export default Reff;

//! --- Task on Reff

const Reff = () => {
    const videoreff = useRef();
    const [play, setPlay] = useState(true);

    function controls() {
        setPlay(!play)
        if (play) {
            videoreff.current.play();
        } else {
            videoreff.current.pause();
        }
    }

    return (
        <>
            {/* //! --- first way  */}
            {/* {
        (play)?(
            <div id = "video">
                <video src="src/car.mp4" ref={videoreff}>
                </video>
                    <button onClick={controls} >Play</button>
            </div>
        ):(
            <div id = "video">
                <video src="src/car.mp4" autoPlay ref={videoreff}>
                </video>
                    <button onClick={controls} >Pause</button>
            </div>
        )
        } */}

        {/* //! -- sec way */}
        <div id = "play">

            <div id="video">
                <video src="src/car.mp4" ref={videoreff}></video>
            </div>
            <div id = "btn">
                <button onClick={controls}>{(play) ? "Play" : "Pause"}</button>
            </div>

        </div>
        </>
    )
}

export default Reff