

import mongoose from 'mongoose'

  const UserSchema = new mongoose.Schema({
    id:Number,
    text: String,
  })
  
  module.exports = mongoose.models.User || mongoose.model('User', UserSchema)