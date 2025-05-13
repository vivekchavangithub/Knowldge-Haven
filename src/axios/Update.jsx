import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './create.module.css'

const Update = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: ""
  })
  const navigate = useNavigate()

  const {id} = useParams()
  useEffect(() =>{
    axios.get("http://localhost:5000/users/"+id).then((v)=>{
      setValues(v.data)
    })
    // console.log(values)
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:5000/users/"+id,values).then((v) => {
      // console.log(v)
    })
    navigate("/")
  }


  return (
    <div className={style.main}>
      <h3>Employee Details</h3>
      <div className={style.form}>

        <form onSubmit={handleSubmit} >

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder='Enter Name' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />

          <label htmlFor="Email">Email:</label>
          <input type="Email" name="email" placeholder='Enter Email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />

          <label htmlFor="Mobile">Mobile:</label>
          <input type="number" name="mobile" placeholder='Enter Mobile Number' value={values.contact} onChange={(e) => setValues({ ...values, contact: e.target.value })} />

          <div id={style.btn}>
            <button type='submit'>Submit</button>
            <button>Back</button>

          </div>

        </form>

      </div>

    </div>
  )
}


export default Update