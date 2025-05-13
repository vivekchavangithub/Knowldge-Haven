import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "C:/Users/vivek/OneDrive/Desktop/ReactJs/My_Project/src/assets/logo.webp"
import books from './api3.json'
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

  const [Search, setSearch] = useState([])
  const navigate = useNavigate();

  console.log()
  const handleLogout = () => {
    toast.success('Logout Successfully !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    setTimeout(() => {
      localStorage.removeItem("login");
      location.reload()
    }, 2000);

  };

  function fetchProduct() {
    localStorage.setItem("item", JSON.stringify(Search))
    navigate("/search")
  }

  function searchBox(e) {

    let searchTerm = e.target.value.toLowerCase();
    let filterproduct = books.filter((prod) =>
      prod.title.toLowerCase().includes(searchTerm) || prod.author.toLowerCase().includes(searchTerm)
    );

    setSearch(filterproduct)
  }

  return (
    <>


      <nav className={styles.navbar}>
        <div className={styles.logo}><img src={logo} alt="logo image" /></div>
        <div className={styles.links}>
          <ul>
            <li>
              <NavLink to="/home/:id" ClassName={styles.active}>Home</NavLink>
            </li>
            <li className={styles.dropdown}>
              <a className={styles.dropdownToggle} href="#" role="button">
                Books
              </a>
              <ul className={styles.dropdownMenu}>
                <li>
                  <NavLink to="/childrenbook" ClassName={styles.active}>Children Books</NavLink>
                </li>
                <li>
                  <NavLink to="/fictionbook" ClassName={styles.active}>Fiction Books</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about" ClassName={styles.active}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" ClassName={styles.active}>Contact</NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={localStorage.getItem("login") ? handleLogout : undefined}
              >
                { localStorage.getItem("login") ? "Logout" : "Login" }
              </NavLink>
            </li>
            { localStorage.getItem("login") ? (              
            <li><NavLink to="/cart" className={styles.active}>MyBooks</NavLink></li>) :
            (localStorage.removeItem("user")) }
          </ul>
        </div>
        <div className={styles.search}>
          <form onSubmit={fetchProduct} >
            <input type="search" onChange={(e) => searchBox(e)} placeholder="Search books..." />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Navbar;