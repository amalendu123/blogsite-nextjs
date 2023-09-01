import React from 'react'
import style from '../component/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={style.navbar}>
        <h2>Blogs</h2>
        <div className={style.items}>
            <Link href='/'><li>Home</li></Link>
            <Link href='/blogs'><li>Blogs</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
            
        </div>
        <div className={style.sizedbox}></div>
        
    </div>
  )
}

export default Navbar