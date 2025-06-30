class UpdateCourse {
    constructor(courseRepository){
        this.courseRepository = courseRepository
    }

    async execute(id, {name, description, studentIds}){
        const updatedCourse = await this.courseRepository.update(id, {
            name,
            description, 
            studentIds
        })
        if(!updatedCourse){
            throw new Error('Course not found')
        }
        return updatedCourse
    }

}

module.exports = UpdateCourse