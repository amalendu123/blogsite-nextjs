import React, { useState } from 'react'
import style from '../styles/blog.module.css'
import Link from 'next/link'
const Blogs = (props) => {
    const [blogs,setBlogs]=useState(props.data)
  return (
    <div>
        <h1 className={style.heading}>blogs</h1>
        {blogs.map((blogItem)=>{
            return(
                <div className={style.item}>
                <div >
                    <Link href={`/blogpost/${blogItem.s}`}><h3 className={style.text}>{blogItem.title}</h3></Link>
                     <p>{blogItem.content.substr(0,100)}</p>
                </div>
                </div>
            )
        })}
    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/allblogs')
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
export default Blogs