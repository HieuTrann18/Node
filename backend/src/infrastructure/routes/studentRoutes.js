const express = require('express');
const StudentController = require('../controllers/StudentController')
const router = express.Router()

router.post('/', StudentController.create)
router.get('/:id', StudentController.getStudent)
router.get('/', StudentController.getAllStudent)
router.put('/:id', StudentController.updateStudent)
router.delete('/:id', StudentController.deleteStudent)

module.exports = router
