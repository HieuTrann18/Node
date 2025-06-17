const connection = require('../config/database')

const getAllStudents = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Students')
    return results
}

const getStudentById = async (studentId) => {
    let sql = 'SELECT * FROM Students WHERE id = ?'
    let [results, fields] = await connection.query(sql, [studentId])
    const student = results && results.length > 0 ? results[0] : {}
    return student
}
const addStudent = async (email, name, city) => {
    let sql = 'INSERT INTO Students (email, name, city) VALUES (?, ?, ?)'
    let [results, fields] = await connection.query(sql, [email, name, city])
    return results
}
module.exports = {
    getAllStudents,
    getStudentById,
    addStudent
}
