const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index");

class Author extends Model {}

Author.init({
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth: {
    type: DataTypes.STRING,
    allowNUll: false,
  },
  death: {
    type: DataTypes.STRING,
    allowNUll: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    sequelize,
    tableName: "author",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName : true
});

module.exports = Author