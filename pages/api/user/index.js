import { isTryStatement } from "typescript";
import {  item } from "../../../data/DataArray";


export default function handler(req, res) {
    if(req.method === 'GET')
    {
        res.status(200).json(item)
    }
    else if(req.method === 'POST')
    {
        const newdata = req.body;
        console.log("shivam :",newdata)
    
        const newDataEnter = ({
            id:newdata.id,
            text:newdata.Comment
        })
        item.push(newDataEnter)
        res.status(201).json(newDataEnter)
    }else if(req.method === 'PUT')
    {
        const {id,Comment} = req.body;

        const index = item.findIndex(e => e.id === parseInt(id))
        
        item.map((elem,i) =>{
            if(i === index)
            {
                return item.splice(index, 1, {id:parseInt(id),text:Comment});
                // return {id:parseInt(id),text:Comment}
            }
        })
        res.status(201).json({msg:"Good Job"})
    }
  }