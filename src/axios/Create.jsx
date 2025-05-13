import React, { useState } from 'react'
import style from './create.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [values,setValues] = useState({
    name:"",
    email:"",
    contact:""
  })

  const navigate = useNavigate()

  function handleSubmit(e){

    e.preventDefault();
    axios.post("http://localhost:5000/users",values).then((v)=>{
      // console.log(v)
    })
    navigate("/")

  }

  return (
    <div className={style.main}>
      <h3>Employee Details</h3>
      <div className={style.form}>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name ="name" required placeholder='Enter Name' onChange={(e)=>setValues({...values,name:e.target.value})} />
          
          <label htmlFor="Email">Email:</label>
          <input type="Email" name = "email" required placeholder='Enter Email' onChange={(e)=>setValues({...values,email:e.target.value})} />
          
          <label htmlFor="Mobile">Mobile:</label>
          <input type="number" name = "mobile" required placeholder='Enter Mobile Number' onChange={(e)=>setValues({...values,contact:e.target.value})}/>

          <div id={style.btn}>
            <button type='submit'>Submit</button>
            <button onClick={() => navigate("/")}>Back</button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Create