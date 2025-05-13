import React, { useState } from 'react';
import styles from "./ChildrenBooks.module.css";
import View from "./View";
import { useNavigate } from 'react-router-dom';


const Search = () => {

  const books = JSON.parse(localStorage.getItem("item"));
  const [viewMore, setViewMore] = useState(null);
  const navigate = useNavigate()

  function handleView(book) {
    // e.preventDefault();
    setViewMore(book);
  }

  function goBack() {
    setViewMore(null)
  }
  function back() {
    navigate("/home/:id")
  }

  if (books.length == 0) {
    return (
      <>
        {
          <div className={styles.container}>
            <button className={styles.backButton} onClick={back}>Go Back</button>
            {/* <h1 className={styles.title}>Search's Books</h1> */}
            <div className={styles.cardContaine}>
              <h1>Sorry No Books Found! 😓</h1>
            </div>
          </div>
        }
      </>
    )
    
  }
  else {
    return (
      <>
        {
          (viewMore) ? (
            <View book={viewMore} back={goBack} />
            ) : (<div className={styles.container}>
            <button className={styles.backButton} onClick={back}>Go Back</button>
            <h1 className={styles.title}>Search's Books</h1>
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
    )
  }



}

export default Search