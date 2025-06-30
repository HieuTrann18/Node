class GetAllCourse{
    constructor(courseRepository){
        this.courseRepository = courseRepository
    }

    async execute(){
        const result = await this.courseRepository.getAll()
        
        if(!result){
            throw new Error('Course is empty')
        }

        return result
    }
}

module.exports = GetAllCourse