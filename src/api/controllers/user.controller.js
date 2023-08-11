const User = require("../../models/users.model");
const bcrypt = require("../../libs/bcrypt");
const jwt = require("../../libs/jwt");
const { generateHash, comparePass } = require("../../libs/bcrypt");

const register = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;
    const generate = await generateHash(password);

    const findUser = await User.findAll({ where: { email: email } },{logging: false});

    if (findUser.length > 0) {
      // Check if any user was found with the provided email
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      // Wait for the user to be created
      firstName,
      lastName,
      phone,
      email,
      password: generate,
    },{logging: false});

    const token = jwt.sign({ userId: newUser.id }); // Use the newly created user

    res.cookie("token", token);

    res
      .status(201)
      .json({ message: `Welcome ${firstName} ${lastName}`, token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)

    const findUser = await User.findAll({ where: { email: email } },{logging: false});
    console.log(findUser);
    if (!findUser.length) {
      return res.status(404).json({ message: "Email or password invalid" });
    }

    const compare = await comparePass(password, findUser[0].password);
    if (!compare || findUser == []) {
      return res.status(404).json({ message: "Passwords do not match" });
    }
    const token = jwt.sign({ userId: findUser.id });

    res.cookie("token", token);

    res.status(201).json({ message: `Welcome`, token: token });
    // res.redirect("/admin");
  } catch (error) {
    res.json({ msg: error.message });
  }
};

module.exports = { register, login };
