const express = require('express')

const studentCtrl = require('../controllers/student-ctrl')

const router = express.Router()

router.post('/Createstudent',studentCtrl.Createstudent)


module.exports = router