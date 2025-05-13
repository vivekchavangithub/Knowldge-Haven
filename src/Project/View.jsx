import axios from "axios";
import styles from "./view.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const View = ({ book, back }) => {

  const navigate = useNavigate()
  
  const [data,setData] = useState({
    name:"",
    mobile:"",
    email:"",
    password:"",
    cart:[]
  })

  const id = localStorage.getItem("user")
  useEffect(() =>{

    axios.get("http://localhost:5000/users/"+id).then((v) => {
      setData(v.data)
      console.log(v.data)
    })

  },[id])

  function handleCart(e){
    e.preventDefault()

    if(!id){
      // alert("First Login to Account !");
      toast.warn("First Login to Account ! ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
      return;
    }

    if (data.cart.includes(book.id)) {
      // alert("This book is already in your cart!");
      toast.info("This book is already in your cart! ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
      return;
    }

    // Update the cart array with the new book ID
    const updatedCart = [book.id, ...(data.cart || [])];

    // Update the `data` state with the updated cart
    setData((prevData) => ({
      ...prevData,
      cart: updatedCart
    }));

    axios.put("http://localhost:5000/users/"+id,{ ...data, cart: updatedCart }).then((v) =>{
      toast.success("Data Added sucsseefully! ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    })
  }

  return (
    <>

      <div className={styles.detailsContainer}>
        <button className={styles.backButton} onClick={back}>Go Back</button>
          <h1 className={styles.title}><strong>Book Title : </strong>{book.title}</h1>
        <div className={styles.detailsContent}>
          <img src={book.image} alt={book.title} className={styles.image} />
          <div className={styles.contentdata}>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> ₹{book.price}</p>
          <p><strong>MRP:</strong><span className={styles.mrp}> ₹{book.mrp}</span></p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <button className={styles.cartButton} onClick={handleCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View