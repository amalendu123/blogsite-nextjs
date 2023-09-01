import React from 'react'
import style from '../styles/about.module.css'
const About = () => {
  return (
    <div className={style.page}>
        <div className={style.leftside}>
            <div >
               <li>Name:xyz</li> 
               <li>Occupation:Blogger</li> 
               <li>age:29</li> 
               <li>place:New york</li> 
            </div>
            <div>This page is written by me.I write daily vlog about technology and write about amazing ways to code . I work as software develpoer for x company .if you need any help or do you need any paid service like webdevelpoment,app develpment contact me .</div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default About