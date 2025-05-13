import React, { useState } from "react";
import styles from "./ChildrenBooks.module.css";
import books from "./api.json"
import View from "./View";


const ChildrenBooks = () => {

  const [viewMore,setViewMore] = useState(null);


  function handleView(book){
    // e.preventDefault();
    setViewMore(book);
  }

  function goBack(){
    setViewMore(null)
  }


  return (
    <>
    {
      (viewMore)?(
        <View book = {viewMore} back = {goBack}/>
        ):(<div className={styles.container}>
        <h1 className={styles.title}>Children's Books</h1>
        <div className={styles.cardContainer}>
          {books.map((book) => (
            <div key={book.id} className={styles.card}>
              <img src={book.image} alt={book.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <p className={styles.price}>Price: ₹{book.price} <span className={styles.mrp}>MRP: ₹{book.mrp}</span></p>
                <button onClick={() => handleView(book)} className={styles.moreButton}>View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>)
    }
    
    </>
  );
};

export default ChildrenBooks;