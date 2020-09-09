const Users = require("../models/user");
const { ValidationError } = require("../utils/errors");
const bcrypt = require("bcryptjs");

module.exports = async (req, res, next) => {
  let { email, password, role } = req.body;
  try {
    const userExist = await Users.findOne({ email });

    if (userExist) throw new ValidationError(422, "User already exist!");

    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(data.password, salt);
    }

    let user = new Users({ email, password, role });
    try {
      user = await user.save();
    } catch (err) {
      throw new ValidationError(422, err.message);
    }

    res.status(200).send();
  } catch (err) {
    return next(err);
  }
};
