import { isTryStatement } from "typescript";
// import {  item } from "../../../data/DataArray";
import dbConnect from "../../../utils/dbConnect";
import Note from '../../../models/Note'

export default async function handler (req, res) {
    const DeleteId = req.query;
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'DELETE':
        try {
        //   const user = await Note.create(req.body)
          const user = await Note.findByIdAndRemove({_id: DeleteId.id});
          res.status(201).json({ success: true, data: user })
        } catch (error) {
            console.log(error.message   )
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }