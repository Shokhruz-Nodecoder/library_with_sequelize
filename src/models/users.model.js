const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index");

class Users extends Model {}

Users.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableNames: true
  }
);

module.exports = Users;
