import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./cart.module.css";
import booksData from "./api3.json"; // Import books data locally

const Cart = () => {
  const [userData, setUserData] = useState(null); // User data fetched from the API
  const [cartBooks, setCartBooks] = useState([]); // Books in the cart

  const userId = localStorage.getItem("user"); // User ID stored locally

  useEffect(() => {
    // Fetch user data from API
    axios.get(`http://localhost:5000/users/${userId}`).then((res) => {
        const user = res.data;
        setUserData(user);

        // Filter books from books.json based on the user's cart
        const filteredBooks = booksData.filter((book) => user.cart.includes(book.id));
        setCartBooks(filteredBooks);
      })
      // .catch((error) => {
      //   console.error("Error fetching user data:", error);
      //   alert("Failed to fetch user data!");
      // });
  }, [userId]);

  const handleRemoveFromCart = (bookId) => {
    // Update the user's cart
    const updatedCart = userData.cart.filter((id) => id !== bookId);
    const updatedUserData = { ...userData, cart: updatedCart };

    // Update user data in the backend
    axios.put(`http://localhost:5000/users/${userId}`, updatedUserData).then(() => {
        setUserData(updatedUserData); // Update local user data state
        setCartBooks(cartBooks.filter((book) => book.id !== bookId)); // Update cart books
        alert("Book removed from cart!");
      })
      // .catch((error) => {
      //   console.error("Error updating user data:", error);
      //   alert("Failed to remove book from cart!");
      // });
  };

  //!---
  // const [cartItems, setCartItems] = useState(userData.cart || []);
  // const [quantities, setQuantities] = useState(
  //   cartItems.reduce((acc, id) => ({ ...acc, [id]: 1 }), {})
  // );

  // const handleQuantityChange = (id, delta) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: Math.max(1, (prev[id] || 1) + delta),
  //   }));
  // };

  // const handleRemove = (id) => {
  //   setCartItems(cartItems.filter((item) => item !== id));
  // };

  // const totalPrice = cartItems.reduce((total, id) => {
  //   const book = books.find((b) => b.id === id);
  //   return total + book.price * (quantities[id] || 1);
  // }, 0);


  return (

    <div className={styles.cartContainer}>
      <h1 className={styles.title}>My Books</h1>
      {cartBooks.length > 0 ? (
        <div className={styles.cartItems}>
          {cartBooks.map((book) => (
            <div key={book.id} className={styles.cartItem}>
              <img src={book.image} alt={book.title} className={styles.image} />
              <div className={styles.bookDetails}>
                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Price:</strong> ₹{book.price}</p>
                {/* <p><strong>MRP:</strong> ₹{book.mrp}</p> */}
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveFromCart(book.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.emptyMessage}>Your cart is empty. Start adding books!</p>
      )}
    </div>
  );
};

export default Cart;


