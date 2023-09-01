import React,{useState} from 'react'
import { useRouter } from 'next/router'
const Id = (props) => {
    const [pblog,setpblog]=useState(props.data)
   
  return (
    <div>
        <h1>{pblog.title}</h1>
        <p>{pblog.content}</p>
        
    </div>
  )
}
export async function getServerSideProps(context) {
    let x=context.query;
    // const router=useRouter();
    
    //   if(!router.isReady) return;
      
    // const {slug}=context.query;
        
        
        const res = await fetch(`http://localhost:3000/api/getblogs/${x.id}`)
        const data = await res.json()
       
        // Pass data to the page via props
        return { props: { data} }
  }
export default Id