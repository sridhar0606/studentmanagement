const Course = require('../models/course_model.js')

Createcource = (req, res) => {
    const body = req.body
    console.log("body",body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

var collection = {
                  CourseName: body.coursname,
                  StaffName:body.staff 
              }

    const course = new Course(collection)

    console.log("rr",course)

    if (!course) {
        return res.status(400).json({ success: false, error: err })
    }

    course
        .save()
        .then(() => {
       
      return res.status(200).json({ message:"Registration success " })
          })
        .catch(error => {

            console.log("error",error)
            return res.status(400).json({
                error,
                message: 'Registration un success!',
            })
        })
}

CourseCollection = async (req, res) => {

    await Course.find({}, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!course.length) {
            return res
                .status(404)
                .json({ success: false, error: `product not found` ,data:[] })
                }
        return res.status(200).json({ success: true, data: course })
    }).catch(err => console.log(err))


}




module.exports = {
    Createcource,
    CourseCollection
}