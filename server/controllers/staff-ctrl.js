const Staff = require('../models/staff_model.js')

Createstaff = (req, res) => {
    const body = req.body
    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

var collection = {
                  Name: body.name,
                  Email: body.email,
                  Mobile:body.mobile,
                  Dob:body.dob
            }
    const staff = new Staff(collection)

    if (!staff) {
        return res.status(400).json({ success: false, error: err })
    }

    staff
        .save()
        .then(() => {
            return res.status(200).json({ visible:"true",color:"success",message:"Registration success " })
          })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Registration un success!',
            })
        })
}

StaffCollection = async (req, res) => {

Staff.aggregate([{
  $group: { "_id": "$_id","Name":{ "$first": "$Name"},"Email":{ "$first": "$Email"},"Dob":{ "$first": "$Dob"},"Mobile":{ "$first": "$Mobile"}} 
      }
     ],(err,data )=> {

        console.log("ff",data)
        console.log("mm",err)

      if (data.length == 0) {
          return res.status(400).json({ success: false, error: err,message:"staff not found" })
        }
          else{
       return res.status(200).json({"data":data}) 
            }
        })

}




module.exports = {
    Createstaff,
    StaffCollection
}