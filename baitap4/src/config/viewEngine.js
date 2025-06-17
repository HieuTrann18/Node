const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    const viewPath = path.join(__dirname, '..', 'views')
    const staticPath = path.join(__dirname, '..', 'public')
    app.set('view engine', 'ejs')
    app.set('views', viewPath)
    app.use(express.static(staticPath))
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    console.log('check view path', staticPath)
}

module.exports = configViewEngine