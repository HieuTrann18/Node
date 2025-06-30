const courseRepository = require('../../../domain/repositories/CourseRepository')
const CourseModel = require('../../database/mongodb/schemas/CourseSchema')

class CourseImpMongo extends courseRepository {
    async create(course) {
        const doc = new CourseModel({
            id: course.id,
            name: course.name,
            description: course.description,
            studentIds: course.studentIds || []
        });
        return await doc.save()
    }

    async getById(id) {
        return await CourseModel.findOne({ id })
    }

    async getAll() {
        return await CourseModel.find()
    }

    async update(id, updatedCourse) {
        await CourseModel.updateOne({ id }, updatedCourse)
        return await this.getById()
    }

    async delete(id) {
        const result = await CourseModel.deleteOne({ id });

        if (result.deletedCount === 0) {
            throw new Error('Course not found');
        }

        return { message: 'Course deleted successfully' };
    }
}

module.exports = CourseImpMongo