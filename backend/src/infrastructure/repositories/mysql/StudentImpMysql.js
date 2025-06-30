const StudentRepository = require('../../../domain/repositories/StudentRepository')
const { getMysqlConnection } = require('../../database/connection')

class StudentImpMysql extends StudentRepository {
    async create(student) {
        const connection = getMysqlConnection()
        const sql = 'INSERT INTO students (id, name, age, score) VALUES (?, ?, ?, ?)'
        const [result] = await connection.query(sql, [student.id, student.name, student.age, student.score])
        return student 
    }

    async getById(id) {
        const connection = getMysqlConnection()
        const sql = 'SELECT * FROM students WHERE id = ?'
        const [result] = await connection.query(sql, [id])
        return result[0]
    }

    async getAll() {
        const connection = getMysqlConnection()
        const sql = 'SELECT * FROM students'
        const [result] = await connection.query(sql)
        return result
    }

    async update(id, updatedStudent) {
        const connection = getMysqlConnection()
        const sql = 'UPDATE students SET name = ?, age = ?, score = ? WHERE id = ?'
        const values = [updatedStudent.name, updatedStudent.age, updatedStudent.score, id]
        const [result] = await connection.query(sql, values)

        const [rows] = await connection.query('SELECT * FROM students WHERE id = ?', [id])
        return rows[0]
    }

    async delete(id) {
        const connection = getMysqlConnection()
        const sql = 'DELETE FROM students WHERE id = ?'
        const [result] = await connection.query(sql, [id])

        if (result.affectedRows === 0) {
            throw new Error('Student not found')
        }

        return { message: 'Student deleted successfully' }
    }
}

module.exports = StudentImpMysql
