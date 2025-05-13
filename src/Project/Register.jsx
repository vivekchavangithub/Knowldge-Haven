import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Login.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate()
    const [login,setLogin] = useState({
      name:"",
      mobile:"",
      email:"",
      password:"",
      cart:[]
    })

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:5000/users",login).then((v)=>{
          toast.success("Registration Done sucsseefully! ", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        navigate("/login")
        })  
    }

  return (
    <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e)=>setLogin({...login,name:e.target.value})}
              required
              placeholder="Enter your Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Mobile">Mobile</label>
            <input
              maxLength={10}
              minLength={10}
              type="tel"
              name="mobile"
              onChange={(e)=>setLogin({...login,mobile:e.target.value})}
              required
              placeholder="Enter your Mobile No"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e)=>setLogin({...login,email:e.target.value})}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e)=>setLogin({...login,password:e.target.value})}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Register
          </button>
        </form>
      </div>
  )
}

export default Register