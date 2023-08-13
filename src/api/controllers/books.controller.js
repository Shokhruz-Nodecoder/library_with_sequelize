const Books = require("../../models/books.model");
const { v4: uuid } = require("uuid");
const path = require("path");

const create = async (req, res) => {
  try {
    const { title, page, year, price, country, author, description,category_id,author_id } = req.body;
    const { image } = req.files;
    const imagename = `${uuid()}${path.extname(image.name)}`;
    console.log(imagename);

    image.mv(process.cwd() + "/uploads/" + imagename);
    await Books.create({
      title,
      page,
      year,
      price,
      country,
      author,
      description,
      imagename,
      category_id,
      author_id
    });

    res.status(200).json({ msg: "Successfully created" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
