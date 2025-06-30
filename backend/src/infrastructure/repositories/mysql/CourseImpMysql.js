const CourseRepository = require('../../../domain/repositories/CourseRepository')
const {getMysqlConnection} = require('../../database/connection')

class CourseImpMysql extends CourseRepository {
    async create(course){
        const connection = getMysqlConnection()
        const sql = 'INSERT INTO courses (id, name, description) VALUES (?,?,?)'
        const [result] = await connection.query(sql, [course.id, course.name, course.description])
        return result
    }

    async getById(id){
        const connection = getMysqlConnection()
        const sql = 'SELECT * FROM courses WHERE id = ? '
        const [result] = await connection.query(sql, [id])
        return result[0]
    }

    async getAll(){
        const connection = getMysqlConnection()
        const sql = 'SELECT * FROM courses'
        const [result] = await connection.query(sql)
        return result
    }

    async update(id, updatedCourse){
        const connection = getMysqlConnection()
        const sql = 'UPDATE courses SET name = ?, description = ? WHERE id = ?'
        const values = [updatedCourse.name, updatedCourse.description, id]

        const [result] = await connection.query(sql, values)

        const [rows] = await connection.query('SELECT * FROM courses WHERE id = ?', [id]);
        return rows[0]
        
    }

    async delete(id){
        const connection = getMysqlConnection()
        const sql = 'DELETE FROM courses WHERE id = ?'
        const [result] = await connection.query(sql, [id])

        return { message: 'Student deleted successfully' };
    }
}

module.exports = CourseImpMysql