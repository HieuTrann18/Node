 class DeleteCourse {
    constructor(courseRepository){
        this.courseRepository = courseRepository
    }

    async execute(id){
        const result = await this.courseRepository.delete(id)

        if(!result){
             throw new Error('Course not found')
        }
        return result
    }
 }

 module.exports = DeleteCourse