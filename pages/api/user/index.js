import { isTryStatement } from "typescript";
// import {  item } from "../../../data/DataArray";
import dbConnect from "../../../utils/dbConnect";
import Note from '../../../models/Note'

export default async function handler (req, res) {
    const DeleteId = req.query;
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const users = await Note.find({})
          res.json({ success: true, data: users })
        } catch (error) {
            console.log(error.message   )
          res.status(400).json({ success: false})
        }
        break
      case 'POST':
        try {
          const user = await Note.create(req.body)
          res.status(201).json({ success: true, data: user })
        } catch (error) {
            console.log(error.message   )
          res.status(400).json({ success: false })
        }
        break
      case 'PUT':
        try {
        //   const user = await Note.create(req.body)
          const user = await Note.findOneAndUpdate({id : req.body.id}, req.body)
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