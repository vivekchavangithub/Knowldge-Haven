import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import style from './create.module.css'

const Read = () => {
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
    console.log(values)
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:5000/users/"+id,values).then((v) => {
      console.log(v)
    })
    navigate("/")
  }

  return (
    <div className={style.main}>
      <h3>Employee Details</h3>
      <div className={style.form}>

        <form onSubmit={handleSubmit} >

          <label htmlFor="name">Name: {values.name}</label>
          

          <label htmlFor="Email">Email: {values.email}</label>
          

          <label htmlFor="Mobile">Mobile: {values.contact}</label>
          

          <div id={style.btn}>
            <Link to={`/Update/${id}`}>Edit✏️</Link>
            <button>Back</button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Read