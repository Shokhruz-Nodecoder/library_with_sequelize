const Category = require("./category.model");
const Book = require("./books.model");
const Author = require("./author.model");
const AuthorBook = require("./author-book.model");

const Relations = () => {
  Category.hasMany(Book, { foreignKey: "category_id" });
  Book.belongsTo(Category, { foreignKey: "category_id" });

  Author.belongsToMany(Book, { through: AuthorBook, foreignKey: "book_id" });
  Book.belongsToMany(Author, { through: AuthorBook, foreignKey: "author_id" });
};

module.exports = Relations;
