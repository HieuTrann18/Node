class GetCourse {
    constructor(courseRepository){
        this.courseRepository = courseRepository
    }

    async execute(id){
        const result = await this.courseRepository.getById(id)
        
        if(!result){
            throw new Error('Not found course')
        }

        return result
    }
}

module.exports = GetCourse