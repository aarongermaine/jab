const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SALT = process.env.SALT || 10;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

userSchema.pre(
  "save",
  function (next) {
    var user = this;
    if (!user.isModified("password")) {
      return next();
    }
    bcrypt
      .hash(user.password, SALT)
      .then((hashedPassword) => {
        user.password = hashedPassword;
        next();
      })
      .catch((err) => {
        throw err;
      });
  },
  function (err) {
    next(err);
  }
);

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
