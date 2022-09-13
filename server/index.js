const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const StaffRouter = require('./routes/staff-router')
const StudentRouter = require('./routes/student-router')
const Course = require('./routes/course-router')
const app = express()
const apiPort =5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', StaffRouter)
app.use('/api', StudentRouter)
app.use('/api', Course)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))