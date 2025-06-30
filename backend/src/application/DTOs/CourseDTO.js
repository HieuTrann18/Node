
class CourseDTO {
    constructor(course){
        this.id = course.id
        this.name = course.name
        this.description = course.description
        this.studentIds = course.studentIds || []
    }

    static fromRequest(data){
        const {name, description, studentIds} = data
        return {
            name,
            description,
            studentIds: studentIds || []
        }
    }
}

module.exports = CourseDTO