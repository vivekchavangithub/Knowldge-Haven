import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from './Login.module.css'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const login = ({children}) =>{
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    let id = ""
    useEffect(() =>{
      axios.get("https://vivekchavangithub.github.io/jsonapi/login.json").then((v) =>{
          setData(v.data)
          console.log(v.data)
        })
    },[])

    function handleSubmit(e){
        e.preventDefault();
        console.log(data)

        data.map((v)=>{

          if((v.email)== email){
            if((v.password) == password){
              id = v.id
            }
          }
        })


        let flg = data.find((v) => {
          return (v.email == email) && (v.password == password)
        })

        if(flg){
          localStorage.setItem("login",true)
          toast.success('Login Successfully !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
          localStorage.setItem("user",id)
          navigate(`/home/${id}`)
        }else{
          // alert("Email or Password is incorrect!")
          toast.warn("Email or Password is incorrect!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        }
    }

    return(

      <div className={styles.loginContainer}>
        {/* <h1>Please Login First!</h1> */}
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <Link to="/register" >
            Register?
          </Link>
        </form>
      </div>
      
    )
}

export default login

{/* <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" />
        </form> */}
