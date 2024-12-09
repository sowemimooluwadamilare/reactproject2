import React from 'react'
import classes from './Header.module.css'
import Niitlogo from '../../Assets/Niit pic/Niitlogo.png'
const Header = () => {
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.headerlogo}>
        <img src={Niitlogo} alt='Niitlogo'/>
        </div>
        <nav className={classes.headerNav}>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          
          </nav>
          <div className={classes.button1}>
            <button>Login</button>           
          </div>
          <div className={classes.button2}>
            <button>Register</button>           
          </div>
      </header>
    </div>
  
  )
}

export default Header