const cors = require("cors")
const routes = require("../api/routes")
const fileUpload = require("express-fileupload") 

const express = require("express")
const cookie = require("cookie-parser")
const Relationship = require("../models/association.model")
const modules = (app) =>{
    app.use(cors())
    app.use(fileUpload())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookie())
    Relationship()
    
    app.use(express.static(process.cwd() + "/uploads"))
    app.use(routes)
}

module.exports = modules  