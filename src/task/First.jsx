// import React, { useEffect, useState } from 'react'
// const First = () => {
//     const [data1,setData1] =useState(0)
//     const [data3,setData3] = useState(1)

//     function handle(){
//         setData1(data1+1)
//     }

//     function incri(){
//         console.log("first")
//         return data1*5
//     }

//   return (
//     <div>
//         <input type='number' value={data1} readOnly/><br></br><br/>
//         <button onClick={handle}>Count </button><br/><br/>
//         {incri()}<br/><hr/>
//         <input type='number' value={data3} readOnly/><br/><br/>
//         <button onClick={() => setData3(data3+1)}>Count by 1</button>
//     </div>
//   )
// }


// export default First


//! --- Use Memo


import React, { useEffect, useMemo, useState } from 'react'
const First = () => {
    const [data1,setData1] =useState(0)
    const [data3,setData3] = useState(1)

    function handle(){
        setData1(data1+1)
    }

    let incriment = useMemo(() =>{
        console.log("first")
        return data1*5
    },[data1])


  return (
    <div>
        <input type='number' value={data1} readOnly/><br></br><br/>
        <button onClick={handle}>Count </button><br/><br/>
        {incriment}<br/><hr/>
        <input type='number' value={data3} readOnly/><br/><br/>
        <button onClick={() => setData3(data3+1)}>Count by 1</button>
    </div>
  )
}


export default First