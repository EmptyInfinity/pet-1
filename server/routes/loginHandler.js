const Users = require("../models/user");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    return res.status(200).send(user);
  } catch (err) {
    return next(err);
  }
};
