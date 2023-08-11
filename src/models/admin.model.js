const {Model, DataTypes} = require("sequelize")
const sequelize = require("../db/index")

class Admins extends Model{}

Admins.init({
    username : {
        type : DataTypes.STRING,
        allowNull : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : true
    }
}, {
    sequelize,
    tableName : "admins",
    createdAt : "created_at",
    updatedAt : "updated_at",
    freezeTableName : true
})

module.exports = Admins