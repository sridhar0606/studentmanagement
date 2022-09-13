const express = require('express')

const courseCtrl = require('../controllers/course-ctrl')

const router = express.Router()

router.post('/Createcource',courseCtrl.Createcource)

router.get('/CourseCollection',courseCtrl.CourseCollection)


module.exports = router