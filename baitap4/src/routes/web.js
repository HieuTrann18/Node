const express = require('express')
const router = express.Router()
const {
    getHomePage,
    getCreatePage,
    createStudent,
    getStudents,
    getUpdatePage
} = require('../controllers/homeController')


router.get('/', getHomePage)

router.get('/list-student', getStudents)

router.get('/create', getCreatePage)

router.post('/create-student', createStudent)

router.get('/update/:id', getUpdatePage)

module.exports = router
