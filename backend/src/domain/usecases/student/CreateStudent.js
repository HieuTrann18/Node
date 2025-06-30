const Student = require('../../entities/Student')
const {v4: uuidv4} = require('uuid')

class CreateStudent {
    constructor(studentRepository){
        this.studentRepository = studentRepository
    }

    async execute(name, age, score, courseIds){
        const id = uuidv4()
        const newStudent = new Student(id, name, age, score, courseIds)
        return await this.studentRepository.create(newStudent)
    }
}

module.exports = CreateStudent