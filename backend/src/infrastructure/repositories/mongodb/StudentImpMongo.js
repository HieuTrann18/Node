const StudentRepository = require('../../../domain/repositories/StudentRepository')
const StudentModel = require('../../database/mongodb/schemas/StudentSchema')

class StudentImpMongo extends StudentRepository {
    async create(student){
         const doc = new StudentModel({
            id: student.id,
            name: student.name,
            age: student.age,
            score: student.score,
            courseIds: student.courseIds || []
        });
        
        return await doc.save()
    }
    async getById(id) {
        return await StudentModel.findOne({ id });
    }

    async getAll() {
        return await StudentModel.find();
    }

    async update(id, updatedStudent) {
        await StudentModel.updateOne({ id }, updatedStudent);
        return await this.getById(id);
    }

    async delete(id) {
        const result = await StudentModel.deleteOne({ id });

        if(result.deletedCount === 0){
            throw new Error('Student not found');
        }

        return { message: 'Student deleted successfully' };
    }
}

module.exports = StudentImpMongo