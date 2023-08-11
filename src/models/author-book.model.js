const {Model, DataTypes} = require("sequelize")
const sequelize = require("../db/index")

class AuthorBook extends Model{}


AuthorBook.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      tableName: "author_books",
      createdAt: "created_at",
      updatedAt: "updated_at",
      freezeTableName: true,
    }
  );
  
  module.exports = AuthorBook;
  