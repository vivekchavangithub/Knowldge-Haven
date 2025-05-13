import { useNavigate, useParams } from 'react-router-dom'
import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const [Data,setData] = useState({
    name:"",
    mobile:"",
    email:"",
    password:"",
    cart:[]
  })
  
  useEffect(() =>{

    axios.get("http://localhost:5000/users/"+id).then((v)=>{
      setData(v.data)
    })

  },[])

  function Explore(e){
    e.preventDefault()
    navigate("/allbooks");

  }
  return (

    <div className={styles.homepage}>

      {/* Hero Section */}
      <section className={styles.hero}>
        {/* <h1>Welcome to Books By Knowldge Haven</h1> */}
        <h1>Welcome {Data.name}</h1>
        <p>Your one-stop destination for amazing deals on books!</p>
        <button onClick={Explore} className={styles.ctaButton}>Explore Books</button>
      </section>

      {/* Featured Books Section */}
      <section className={styles.featuredBooks} id="books">
        <h2>Featured Books</h2>
        <div className={styles.bookGrid}>
          <div className={styles.bookCard}>
            <img src="https://tse4.mm.bing.net/th?id=OIP.4dG5NskDxy0nuBilxpuTuQHaLb&pid=Api" alt="Book 1" />
            <h3>Wuthering Heights</h3>
            <p>By Emily Bronte</p>
          </div>
          <div className={styles.bookCard}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.S7SJ_bM-1a1R2jnu_LHCHgHaKN&pid=Api" alt="Book 2" />
            <h3>Pride and Prejudice</h3>
            <p>By Jane Austen</p>
          </div>
          <div className={styles.bookCard}>
            <img src="https://tse3.mm.bing.net/th?id=OIP.ErdfZFrY-03KaPigAIf1pAHaNS&pid=Api" alt="Book 3" />
            <h3>1984</h3>
            <p>By George Orwell</p>
          </div>
        </div>
      </section>
    </div>



  )
}

export default Home
