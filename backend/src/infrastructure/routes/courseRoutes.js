const express = require('express');
const CourseController = require('../controllers/CourseController');
const router = express.Router()

router.post('/', CourseController.create)
router.get('/:id', CourseController.getCourse)
router.put('/:id', CourseController.updateCourse)
router.get('/', CourseController.getAllCourse)
router.delete('/:id', CourseController.deleteCourse)

module.exports = router