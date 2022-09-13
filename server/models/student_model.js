const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
                   {
                   Name: { type: String, required: true },
                   Email: { type: String, required: true },
                   Dob: { type: String, required: true },
                   BloodGroup: { type: String, required: true },
                   FatherName:{ type: String, required: true },
                   MotherName: { type: String, required: true },
                   Address:{ type: String, required: true },
                   Profile:{ type: String, required: true },
                   Course:{ type: String, required: true },
                   Staff: { type: String, required: true },

                },
      {collection: 'Student'} 

)

module.exports = mongoose.model('Student', Student)