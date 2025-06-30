const StudentService = require('../../application/services/StudentServices')
const createRepository = require('../factories/CreateRepository')

const studentRepository = createRepository('Student')
const studentService = new StudentService(studentRepository)

class StudentController {
    static async create(req, res){
        try{
            const result = await studentService.createStudent(req.body)
            res.status(201).json(result)
        }catch(err){
            res.status(400).json({ error: err.message });
        }
    }

    static async getStudent(req, res){
        try{
            const result = await studentService.getStudentById(req.params.id)
            res.status(200).json(result)
        }catch(err){
             res.status(400).json({ error: err.message });
        }
    }

    static async getAllStudent(req, res){
        try{
            const result = await studentService.getAllStudent()
            res.status(200).json(result)
        }catch(err){
            res.status(400).json({ error: err.message });
        }
    }

    static async updateStudent(req, res){
        try{
            const result = await studentService.updateStudent(req.params.id, req.body)
            res.status(200).json(result)
        }catch(err){
             res.status(400).json({ error: err.message });
        }
    }

    static async deleteStudent(req, res){
        try{
            const result = await studentService.deleteStudent(req.params.id)
            res.status(200).json({ message: 'Delete successfully', result })
        }catch(err){
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = StudentController

