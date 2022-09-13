const express = require('express')

const staffCtrl = require('../controllers/staff-ctrl')

const router = express.Router()

router.post('/Createstaff',staffCtrl.Createstaff)
router.get('/StaffCollection',staffCtrl.StaffCollection)

module.exports = router