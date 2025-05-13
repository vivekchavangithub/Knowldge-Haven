import React from "react";
import { useState } from "react";

// const State = () =>{
//     const[State,setState] = useState("QSP")
//     return(
//         <div>
//         {/* <h1 onClick={()=>{setState("JSP")}}>{State}</h1> */}
//         <h1>we are in {State}</h1>
//         <button onClick={()=>{ 
//             if (State === "QSP"){
//                 setState("JSP")}
//             else{
//                 setState("QSP")
//             }}}>Click hear</button>
//         </div>
//     )
// }

// export default State;


//! --- Count increase and decriment direct

// const State = ()=>{

//     let[Count,setCount] = useState(0)
//     return(
//         <div id = "card">
//            <h1>{Count}</h1>
//            <button onClick={()=>{setCount(++Count)}}>Increment</button>
//            <button onClick={()=>{if (Count == 0){alert("Count must be positive")}else{setCount(--Count)}}}>decriment</button>
//            <button onClick={()=>{setCount(0)}}>reset</button>
//         </div>

//     )
// }

// export default State;


//! ----task 1 : Increment decrment count using function

// const State = ()=>{
//     let[Count,setCount] = useState(0)
//     function incr(){
//         setCount(++Count)
//     }
    
//     function decr(){
//         if(Count == 0){
//             alert("Count Must be Positive")
//         }
//         else{
//             setCount(--Count)
//         }
//     }
    
//     function reset(){
//         setCount(0)
//     }
//     return(
//         <div id = "card">
//            <h1>{Count}</h1>
//            <button onClick={incr}>Increment</button>
//            <button onClick={decr}>decriment</button>
//            <button onClick={reset}>reset</button>
//         </div>
//     )
// }

// export default State;


//! --- task 2 -- Login and Logout

// const State = ()=>{
//     const[Log,setLog] = useState("Login")

//     //using function
//     function log(){
//         (Log == "Login")?setLog("Logout"):setLog("Login")
//     }

//     return(
//         <>
//         <button onClick={()=>{
//             //using if-else
//             if(Log == "Login"){
//                 setLog("Logout")
//             }else{
//                 setLog("Login")
//             }
//         }}>{Log}</button>

//         <button onClick={()=>{
//             //using ternary oprater
//             (Log == "Login")?setLog("Logout"):setLog("Login")

//         }}>{Log}</button>

//         <button onClick={log}>{Log}</button>
//         </>
//     )
// }
// export default State;


//! --- using boolean

// let flg = true
// const State = () =>{
//     const[Log,setLog] = useState("Login")
//     function llog(){
//         if(flg){
//             flg = false
//             setLog("Logout")
//         }
//         else{
//             setLog("Login")
//             flg = true 
//         }
//     }   
//     return(
//         <button onClick={llog} >{Log}</button>
//     )
// }

// export default State;

//! ---- task for the test 

// function fact(n){
//   if (n <= 0){
//     return 1
//   }else{
//     return n*fact(n-1);
//   }
// }

// let n = 5
// let s = "vivek"
// let r = s.split('').reverse().join('');
// function Form(){
//   return(
//     <>
//       <h1>Reverse of the String {s} is {r}</h1>
//       <h1>Factorial of {n} is {fact(n)}</h1>
//     </>
//   )
// }

// export default Form;


//! --- Conditional Rendering new techniue

// const State = () =>{
//     const[Log,setLog] = useState(false)

//     function isLog(e){
//         e.preventDefault()
//         setLog(!Log)
//     }
    
//     if(Log){
//       return(
//       <div id = "log">
//         <div><a href="">Home</a></div>
//         <div><a href="">Contact</a></div>
//         <div onClick={isLog}><a href="">Logout</a></div>
//       </div>
//       )
//     }
//     else{
//       return(
//       <div id = "log">
//         <div><a href="">Home</a></div>
//         <div><a href="">Contact</a></div>
//         <div onClick={isLog}><a href="">Login</a></div>
//         <div onClick={isLog}><a href="">Sinup</a></div>
//       </div>
//       )
//     }

// }

// export default State;


//! ---- Conditional Rendering using ternary oprater

// const State = () =>{
//   const[Log,setLog] = useState(false)

//   function isLog(e){
//       e.preventDefault()
//       setLog(!Log)
//   }

//   return(
//     <>
//       {
//         (Log)?
//         (
//           <div id = "log">
//           <div><a href="">Home</a></div>
//           <div><a href="">Contact</a></div>
//           <div onClick={isLog}><a href="">Logout</a></div>
//           </div>
//         )
//         :
//         (
//           <div id = "log">
//             <div><a href="">Home</a></div>
//             <div><a href="">Contact</a></div>
//             <div onClick={isLog}><a href="">Login</a></div>
//             <div onClick={isLog}><a href="">Sinup</a></div>
//           </div>
//         )     
//       }
//    </>
//   )
// }

// export default State;


//! -- Conditional Rendering using switch case

// const State = () =>{
//   const[Log,setLog] = useState(false)

//   function isLog(e){
//       e.preventDefault()
//       setLog(!Log)
//   }
//   switch(Log)
//   {
//     case true:
//       return(
//         <div id = "log">
//         <div><a href="">Home</a></div>
//         <div><a href="">Contact</a></div>
//         <div onClick={isLog}><a href="">Logout</a></div>
//         </div>
//       )
//     case false:
//       return(
//         <div id = "log">
//           <div><a href="">Home</a></div>
//           <div><a href="">Contact</a></div>
//           <div onClick={isLog}><a href="">Login</a></div>
//           <div onClick={isLog}><a href="">Sinup</a></div>
//         </div>
//       )
//     default:
//       break;
//   }  
// }

// export default State;

//! -- Task On Conditional Rendering

function Form() {
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[fullName, setFullName] = useState('')
  const[status,setStatus] = useState(true)

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  function CheckStatus(){
    if(status & lastName != '' & firstName != '')
       setStatus(false)
    else
      setStatus(true)
  }
  
  return (
    <>
     {
      (status)?
      (
        <div id = "cart">
          <h2>Lets Book your ticket</h2>
          
          <label>
            First name:{' '}
            <input
              value={firstName}
              onChange={handleFirstNameChange}
              />
          </label>
          <label>
            Last name:{' '}
            <input
              value={lastName}
              onChange={handleLastNameChange}
              />
          </label>
          <button onClick={CheckStatus}>Submit</button>

        </div>
      ):
      (
        <div id = "cart">
          <h1>congratulation!!🎉🎉</h1>
 
          <b>{fullName}</b>

          <p>
            Your tickets is confirmed! 
          </p>

          <button onClick={CheckStatus}>Back</button>

        </div>
      )

     }
    
    </>
  );
}

export default Form;