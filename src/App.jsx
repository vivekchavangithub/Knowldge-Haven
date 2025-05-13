// import { Component, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Ban from './Banner';
// import Nav from './NavBar'

// import Child from "./props/Child"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} classNameNameNameName="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} classNameNameNameName="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div classNameNameNameName="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p classNameNameNameName="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//! --- function based compoents
// function App() {
//   return (
//     // <Nav/>
//     // <>
//     //   <Nav/>
//     //   <Ban/>  
//     // </> 

//     <Child data = "Jspiders"/>
//   )
// };

// export default App;


//! --- class based compoents

// import { Component, useState } from 'react'
// export default class App extends Component{
//   render(){
//     return(
//       <h1>Hello world</h1>
//     )
//   }
// }





//! --- props

// import Child from './props/Child';


// const App = ()=>{
//   return(

//     <Child data = "Jspiders"/>

//   )
// }

// export default App;


//! -- to pass the object from parent

// import Child from './props/Child';


// const App = ()=>{
//   let emp = {
//     name:"Vivek",
//     age : 22,
//     state : "Maharashtra",
//     skill:["html","css","js","React"]
//   }

//   localStorage.setItem("react",JSON.stringify(emp));
//   return(
//     <Child data = {emp}/>
//   )
// }

// export default App;


//! ---- Task 1


// const App = () =>{
//   let courses = [
//     {
//       course_id:1,
//       course_name:"javascript",
//       trainer:["satyam",", anish"],
//       duration:1,
//       price:20000,
//       branch:["brt","btm"],
//       languages:["js","dom","es6"]
//     },
//     {
//       course_id:2,
//       course_name:"react Js",
//       trainer:["satyam"],
//       duration:1,
//       price:30000,
//       branch:["btr","btn"],
//       languages:["js","dom","css","react","webpack","babel"]
//     },
//     {
//       course_id:3,
//       course_name:"java",
//       trainer:["anish"],
//       duration: 3,
//       price:35000,
//       branch:["btr","btn"],
//       languages:["java","spring"]
//     }
//   ]

//   return(
//     <Child data = {courses}/>
//   )
// }


// export default App;




//! -- Task 2 --- Image Import 

// import Child from './props/Child'
// function App(){

//   return(
//     <>
//       <Child data = "https://cdn.pixabay.com/photo/2024/01/22/11/02/ai-generated-8524928_640.png"/>
//     </>
//   )
// }

// export default App;

//! ---- Task 3 -- 

// import Data from './props/Data.json'

// const App = () =>{
//   return(
//     <Child d1 = {Data}/>
//   )
// }


// export default App;

//! --- Task 4 

// function App(){
//   return(
//     <div>
//      <Child d1 = "From App "/>
//     </div>
//   )
// }

// export default App;

//! -- 
// import Data from './props/Data.json'

// const App = () =>{
//   return(
//     <Child d1 = {Data}/>
//   )
// }


// export default App;


//! -- 
// import './App.css'
// import Data1 from './props/Data1.json'
// import NavBar from './component/NavBar'

// const App = () =>{
//   return(
//     <>
//       <NavBar/>
//       <div id = "main">

//       <Child d1 = {Data1} />
//       </div>
//     </>
//   )
// }

// export default App;

//! -- State

// import State from "./State/State"
// import '../src/App.css'

// const App = () =>{
//   return (
//     <State />
//   )
// }

// export default App;


//! -- useEffect

// import Effect from './Effect/Effect'
// import '../src/App.css'
// import NavBar from './component/NavBar'
// const App = () =>{
//   return (
//     <>
//     {/* <NavBar /> */}
//     <Effect />
//     </>
//   )
// }

// export default App;


//! -- Reffrence

// import Reff from './Reffrence/Reff'
// import './App.css'
// import NavBar from './component/NavBar'

// const App = () =>{
//   return(
//     <>
//       <NavBar/>
//        <Reff/>
//     </>
//   )
// } 


// export default App;


//! ---- Contex

// import ContexApi from "./Contex/contexApi"
// import Consume from "./Contex/consume"
// import Consume1 from "./Contex/consume1";

// const App = () =>{
//   return(
//     <ContexApi>
//       <Consume/>
//       {/* <Consume1/> */}
//     </ContexApi>
//   )
// }

// export default App;

//! -- Css Module 
// import Home from './CssModule/Home'
// import CssModule from './CssModule/cssModule'

// const App = () => {

//   return(
//     <>
//       <CssModule/>
//       <Home/>
//     </>
//   )

// }

// export default App

//! ---- Styled Componenet 

// import StyledComponent from "./StyledComponent/styledComponent"


// const App = ( ) =>{
//   return (
//     <StyledComponent/>
//   )
// }

// export default App

//! --- Input Form

// import Form from "./InputForm/Form";
// import './App.css'

// const App = () =>{
//   return(
//     <Form>

//     </Form>
//   )
// }

// export default App

//! ------ React Router Dom
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./router/Home"
// import About from "./router/About"
// import Contact from "./router/Contact"
// import Error from "./router/Error"
// import NavBar from "./router/NavBar"
// import Protected from "./router/Protected"
// import Login from './router/Login'
// // import Banner from './router/Banner'

// const App = () =>{
//   return(
//   <>
//     <BrowserRouter>
//        <NavBar/>
//        {/* <Banner/> */}
//        <Routes>
// <Route path="/" element={<Protected Comp = {<Home/>}/> }/>
// <Route path="/login" element={<Login/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/*" element={<Error/>}/>
//        </Routes>
//     </BrowserRouter>
//   </>
//   )
// }


// export default App


//! --- new book project

//npx json-server --watch login.json --port=5000

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Project/Home"
import About from "./Project/About"
import Contact from "./Project/Contact"
import Error from "./Project/Error"
import NavBar from "./Project/NavBar"
import ChildrenBook from './Project/ChildrenBook'
import FictionBook from './Project/FictionBook'
import Footer from "./Project/Footer"
import Protected from "./Project/Protected"
import Login from "./Project/Login"
import Register from "./Project/Register"
import AllBooks from "./Project/AllBooks"
import Search from "./Project/Search"
import Cart from "./Project/Cart"

const App = () =>{
  return(
  <>
    <BrowserRouter>
       <NavBar/>
       <Routes>
        {/* <Route path="/home/:id" element={<Protected Comp = {<Home/>}/> }/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/home/:id" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/childrenbook" element={<ChildrenBook/>}/>
        <Route path="/fictionbook" element={<FictionBook/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/allbooks" element={<AllBooks/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<Error/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App


//! ---- Axios

// import axios from "axios"
// import React from "react"
// import { useState } from "react"
// import { useEffect } from "react"

// const App = () =>{

//   const [data,setData] = useState()

//   useEffect(()=>{

//     axios.get("https://dummyjson.com/recipes").then((v)=>{

//     // console.log(v.data.recipes)

//       setData(v.data.recipes)
//     })
//   },[])


//   return(
//     <>
//     {/* <h1>App</h1> */}
//     {
//       data?.map((v)=>(
//         <h1 key={v.id}>{v.name}</h1>
//       ))
//     }
//     </>
//   )
// }

// export default App

//! --- project using Axios

// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./axios/Home"
// import Read from "./axios/Read"
// import Create from "./axios/Create"
// import Update from "./axios/Update"

// const App = () =>{
//   return(
//     <BrowserRouter>
//        <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/create" element={<Create/>}/>
//         <Route path="/Read/:id" element={<Read/>}/>
//         <Route path="/Update/:id" element={<Update/>}/>
//         {/* <Route path="/Delete" element={<Delete/>}/> */}
//        </Routes>
//     </BrowserRouter>
//   )
// }


// export default App


//! Task State

// import React from 'react'
// import First from './task/first'

// const App = () => {
//   return (
//     <First/>
//   )
// }

// export default App

//! --- 

// import React from 'react'
// // import First from './task/first'
// import { ToastContainer, toast } from 'react-toastify';
// // import Second from './task/Second'

// const App = () => {
//   function info() {
//     toast.error("Access Denied")
//   }


//   return (
//     // <Second/>
    // <div>
    //   <ToastContainer
    //     position="top-right"
    //     autoClose={5000}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   /> 
    //   <button onClick={info}>Click hear</button>
    // </div>
//   )
// }

// export default App

//! --- New Protfolio

// import React from 'react'
// import NavBar from './Project1/NavBar'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './Project1/About'
// import Work from './Project1/Work'
// import Contact from './Project1/Contact'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<About/>}/>
//         <Route path='/work' element={<Work/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App