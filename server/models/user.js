const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
