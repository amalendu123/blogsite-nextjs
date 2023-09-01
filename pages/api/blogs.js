import * as fs from 'fs';
export default function handler(res,req){
    
    res.status(200).json({ message: 'Hello from Next.js!' })
  }