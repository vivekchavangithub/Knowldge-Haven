import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import About from './About'
import Work from './Work'
import logo from 'C:/Users/vivek/OneDrive/Desktop/ReactJs/My_Project/src/assets/V_Mart.png'


const NavBar = () => {
  return (
    <div id={style.navbar}>
        <div id={style.sub1}>
            <img src={logo} alt="" />
            <p>Vivek</p>
        </div>
        <div id = {style.sub}>
            <NavLink to='/' >About</NavLink>
            <NavLink to='/work' >Work</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
        </div>
        
    </div>
  )
}

export default NavBar
