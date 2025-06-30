class DeleteStudent{
    constructor(studentRepository){
        this.studentRepository = studentRepository
    }

    async execute(id){
        const deleteStudent = await this.studentRepository.delete(id)

        if(!deleteStudent){
            throw new Error('Student not found')
        }

        return deleteStudent
    }
}

module.exports = DeleteStudent