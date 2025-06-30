const CreateCourse = require('../../domain/usecases/course/CreateCourse')
const DeleteCourse = require('../../domain/usecases/course/DeleteCourse')
const GetAllCourse = require('../../domain/usecases/course/GetAllCourse')
const GetCourse = require('../../domain/usecases/course/GetCourse')
const UpdateCourse = require('../../domain/usecases/course/UpdateCourse')
const CourseDTO = require('../DTOs/CourseDTO')

class CourseService {
    constructor(courseRepository){
        this.createCourseUseCase = new CreateCourse(courseRepository)
        this.deleteCourseUseCase = new DeleteCourse(courseRepository)
        this.getAllCourseUseCase = new GetAllCourse(courseRepository)
        this.getCourseUseCase = new GetCourse(courseRepository)
        this.updateCourseUseCase = new UpdateCourse(courseRepository)
    }

    async createCourse(data){
        const courseData = CourseDTO.fromRequest(data)
        const course = await this.createCourseUseCase.execute(
            courseData.name,
            courseData.description,
            courseData.studentIds
        )
        return new CourseDTO(course)
    }

    async getCourseById(id){
        const result = await this.getCourseUseCase.execute(id)
        return new CourseDTO(result)
    }

    async getAllCourse(){
        const result = await this.getAllCourseUseCase.execute()
        return result.map(c => new CourseDTO(c))
    }

    async updateCourse(id, data){
        const courseData = CourseDTO.fromRequest(data)
        const updatedCourse = await this.updateCourseUseCase.execute(id, courseData)
        return new CourseDTO(updatedCourse)
    }

    async deleteCourse(id){
        return await this.deleteCourseUseCase.execute(id)
    } 
    
}

module.exports = CourseService
