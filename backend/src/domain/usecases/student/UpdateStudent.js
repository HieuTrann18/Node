class UpdateStudent{
    constructor(studentRepository){
        this.studentRepository = studentRepository
    }

     async execute(id, {name, age, score, courseIds}){
        const updatedStudent = await this.studentRepository.update(id, {
            name,
            age,
            score,
            courseIds
            })
        if(!updatedStudent){
            throw new Error('Student not found')
        }
        return updatedStudent
    }
}

module.exports = UpdateStudent