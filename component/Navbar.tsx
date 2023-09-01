import React from 'react'
import style from '../component/navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.navbar}>
        <h2>Blogs</h2>
        <div className={style.items}>
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
            
        </div>
        <div className={style.sizedbox}></div>
        
    </div>
  )
}

export default Navbar