import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'
import { axioInstance } from './auto/authentication'

const Home = () => {
  const [data, setData] = useState()

  // useEffect(() => {
  //   axios.get("http://localhost:5000/users").then((v) => {
  //     setData(v.data)
  //   })
  // }, [])

  function handleDelete(id){
    axios.delete("http://localhost:5000/users/"+id).then((v)=>{
      location.reload();
    })
  }

  useEffect(()=>{
    axioInstance.get("/users").then((v) =>{
      setData(v.data)
    })
  },[])


  return (
    // <div>{console.log(data)}</div>
    <div id = {style.main}>
      <h1>User Details</h1>
      <Link to="/create">Add+</Link>
      <table id={style.table}>
        <tr className={style.head}>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
        {
          data?.map((v) => (
            <tr>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.contact}</td>
              <td>
                <Link to={`/Read/${v.id}`}>Read</Link>
                <Link to={`/Update/${v.id}`}>Update</Link>
                <button onClick={() => {handleDelete(v.id)}}>Delete</button>
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Home