
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Staff = new Schema(
    {
           Name: { type: String, required: true },
           Email: { type: String, required: true },
           Mobile: { type: String, required: true },
           Dob: { type: String, required: true },
    },
      {collection: 'Staff'} 

)

module.exports = mongoose.model('Staff', Staff)