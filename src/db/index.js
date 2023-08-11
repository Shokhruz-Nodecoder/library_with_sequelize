const {Sequelize} = require("sequelize")  
const sequlize = new Sequelize("postgres://postgres:password@localhost:5432/badiiyat")

module.exports = sequlize