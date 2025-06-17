const connection = require('../config/database')
const { getAllStudents, getStudentById } = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    let results = await getAllStudents()
    return res.render('home', { students: results }) 
}

const getCreatePage = (req, res) => {
    return res.render('create')
}

const getUpdatePage = async (req, res) => {
    const studentId = req.params
    let student = await getStudentById(studentId)
    return res.render('edit', { studentEdit: student }) 
}

const createStudent = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    let sql = `INSERT INTO Students (email, name, city) VALUES (?, ?, ?)`
    let [results, fields] = await connection.query(sql, [email, name, city])
    console.log('check result', results)
    res.send('created success')
}

const getStudents = async (req, res) => {
    const [results, fields] = await connection.query(`SELECT * FROM Students`)
    console.log('check results: ', results)
    res.send(results)
}

module.exports = {
    getHomePage,
    getCreatePage,
    getUpdatePage,
    createStudent,
    getStudents,
}
