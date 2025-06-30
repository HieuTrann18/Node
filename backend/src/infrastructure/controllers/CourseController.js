const CourseService = require('../../application/services/CourseServices')
const createRepository = require('../factories/CreateRepository')

const courseRepository = createRepository('Course')
const courseService = new CourseService(courseRepository)


class CourseController {
    static async create(req, res) {
        try {
            const result = await courseService.createCourse(req.body)
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static async getCourse(req, res) {
        try {
            const result = await courseService.getCourseById(req.params.id)
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static async getAllCourse(req, res) {
        try {
            const result = await courseService.getAllCourse()
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static async updateCourse(req, res) {
        try {
            const result = await courseService.updateCourse(req.params.id, req.body)
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    static async deleteCourse(req, res) {
        try {
            const result = await courseService.deleteCourse(req.params.id)
            res.status(200).json({ message: 'Delete successfully', result })
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = CourseController
