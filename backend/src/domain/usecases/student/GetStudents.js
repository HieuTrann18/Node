

class GetStudent{
    constructor(studentRepository){
        this.studentRepository = studentRepository
    }

    async execute(id){
        const student = await this.studentRepository.getById(id)

        if(!student){
            throw new Error("Student not found");
        }

        return student
    }
}

module.exports = GetStudent