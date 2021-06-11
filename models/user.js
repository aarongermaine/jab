const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SALT = process.env.SALT || "secret";

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
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
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
      .catch(err);
  },
  function (err) {
    next(err);
  }
);

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
