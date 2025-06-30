const CreateStudent = require('../../domain/usecases/student/CreateStudent')
const GetStudent = require('../../domain/usecases/student/GetStudents')
const GetAllStudent = require('../../domain/usecases/student/GetAllStudent')
const UpdateStudent = require('../../domain/usecases/student/UpdateStudent')
const DeleteStudent = require('../../domain/usecases/student/DeleteStudent')
const StudentDTO = require('../DTOs/studentDTO')


class StudentService {
    constructor(studentRepository) {
        this.createStudentUseCase = new CreateStudent(studentRepository)
        this.getStudentByIdUseCase = new GetStudent(studentRepository)
        this.getAllStudentUseCase = new GetAllStudent(studentRepository)
        this.updateStudentUseCase = new UpdateStudent(studentRepository)
        this.deleteStudentUseCase = new DeleteStudent(studentRepository)
    }

    async createStudent(data){
        const studentData = StudentDTO.fromRequest(data);
         const student = await this.createStudentUseCase.execute(
            studentData.name,
            studentData.age,
            studentData.score,
            studentData.courseIds
        );
        return new StudentDTO(student);
    }

    async getStudentById(id){
        const result = await this.getStudentByIdUseCase.execute(id)
        return new StudentDTO(result)
    }

    async getAllStudent(){
        const result = await this.getAllStudentUseCase.execute()
        return result.map(s => new StudentDTO(s));
    }

    async updateStudent(id, data){
        const studentData = StudentDTO.fromRequest(data)
        const updateStudent = await this.updateStudentUseCase.execute(id, studentData)
        return new StudentDTO(updateStudent)
    }

    async deleteStudent(id){
        const result = await this.deleteStudentUseCase.execute(id)
        return result
    }

}

module.exports = StudentService;