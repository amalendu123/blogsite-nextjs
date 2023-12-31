import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Hom } from './home'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const [blogs,setblogs]=useState(props.data)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h2>Popular Blogs</h2>
       {
        blogs.map((blogItem)=>{
          return(
            <>
            <h3>{blogItem.title}</h3>
            <p>{blogItem.content.substr(0,100)}</p>
            </>
          )
        })
       }
      </main>
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/blogs')
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
