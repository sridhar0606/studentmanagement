
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema(
    {
           CourseName: { type: String, required: true },
           StaffName:{type: Schema.Types.Mixed},
    },
      {collection: 'Course'} 

)

module.exports = mongoose.model('Course', Course)