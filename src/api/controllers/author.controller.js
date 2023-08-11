const Author = require("../../models/author.model");
const { v4: uuid } = require("uuid");
const path = require("path");

const create = async (req, res) => {
  try {
    const { firstname, lastname, birth, death, country, bio } = req.body;
    console.log(req.body)
    const { image } = req.files;
    console.log("1213");

    const imagename = `${uuid()}${path.extname(image.name)}`;
    console.log(imagename);

    image.mv(process.cwd() + "/uploads/" + imagename);
    await Author.create(
      {
        firstname,
        lastname,
        birth,
        death,
        country,
        bio,
        imagename,
      },
      { logging: false }
    );

    res.status(200).json({msg:"Successfully created"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { create };
