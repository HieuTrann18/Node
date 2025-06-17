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

module.exports = {
    getAllStudents,
    getStudentById
}
