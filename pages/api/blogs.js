import * as fs from 'fs';
export default async function handler(req,res){
    let data = await fs.promises.readFile('blogpost/popularblogs.json')
    res.status(200).json(JSON.parse(data))
  }