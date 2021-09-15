import {  item } from "../../../data/DataArray";


export default function handler(req, res) {
    const {id,text} = req.query
    if(req.method === 'GET')
    {
        res.status(200).json(item)
    }
   else if(req.method === 'DELETE')
    {
        // console.log("haga",newId)
        const deletetext = item.find(e => e.id === parseInt(id))

        const index = item.findIndex(e => e.id === parseInt(id))
        
        item.splice(index,1)
        // console.log("index ",arr)

        res.status(200).json(deletetext)
    }
  }