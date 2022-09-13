import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const Createstaff = payload => api.post(`/Createstaff`, payload)

export const StaffCollection = () => api.get(`/StaffCollection`)

export const Createstudent = payload => api.post(`/Createstudent`, payload)

export const Createcource = payload => api.post(`/Createcource`, payload)

export const CourseCollection = () => api.get(`/CourseCollection`)

const apis = {
    Createstaff,
    StaffCollection,
    Createstudent,
    Createcource,
    CourseCollection
 }

export default apis