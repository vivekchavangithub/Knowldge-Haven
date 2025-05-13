// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
createRoot(document.getElementById('root')).render(
  <>
   <App/>
  </>
)

//! -------------  our code
// import React from "react";
// import ReactDOM  from "react-dom/client";

// console.log(React)
// console.log(ReactDOM);
// let a = React.createElement("h1",null,"Hello EveryOne");
// ReactDOM.createRoot(document.getElementById("root")).render(a);


// import { createElement } from "react";
// import {createRoot} from "react-dom/client"

// let f = createElement("h1",{style:{color:"red"}},"Hello EveryOne")
// createRoot(document.getElementById("root")).render(f); 


//!-- create in form with native way

// let f = createElement("form",null,createElement("fieldset",null,createElement("label",null,"Enter Name :"),createElement("input",{type:"text"},null),createElement("br",null,null),createElement("br",null,null),createElement("label",null,"Enter Email :"), createElement("input",{type:"email"},null),createElement("br",null,null),createElement("br",null,null),createElement("button",null,"Submit")));

// let root = createRoot(document.getElementById("root"))
// root.render(f);


//! ----- create by .jsx way 

// createRoot(document.getElementById("root")).render(
//   <fieldset>
//   <form>
//     <label htmlFor="Name">Enter Name : </label>
//     <input type="text"></input>
//     <br></br>
//     <br></br>
//     <br></br>

//     <label htmlFor="Email">Enter Email : </label>
//     <input type="email"></input>
//     <br></br>
//     <br></br>

//     {/* <input type="button" </input> */}

//     <button>Submit</button>
//   </form>
//   </fieldset>
// );


// import { Fragment } from "react";
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(
  // <div>
  //! this is one way of fragment 
  // <>
  //! this is second way
//   <Fragment >

//     <h1>
//       Hello World
//     </h1>
//     <h2>{4+5}</h2>

//   </Fragment>
//     </>
//     </div>
// );



