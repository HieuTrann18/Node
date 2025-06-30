const Course = require('../../entities/Course')
const {v4: uuidv4} = require('uuid')

class CreateCourse {
    constructor(courseRepository){
        this.courseRepository = courseRepository
    }

    async execute(name, description, studentIds){
        const id = uuidv4()
        const newCourse = new Course(id, name, description, studentIds)
        return await this.courseRepository.create(newCourse)
    }
}

module.exports = CreateCourse