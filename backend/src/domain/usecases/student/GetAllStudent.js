class GetAllStudent{
    constructor(studentRepository){
        this.studentRepository = studentRepository
    }

    async execute(){
        const student = await this.studentRepository.getAll()

        if(!student){
            throw new Error("Student is empty");
        }

        return student
    }
}

module.exports = GetAllStudent