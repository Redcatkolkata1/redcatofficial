const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  attachments: [
    {
      filename: String,
      path: String,
      mimetype: String,
    },
  ],
});

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  lname: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: { type: String, required: true },
  messages: [messageSchema],
});

const users = mongoose.model("users", userSchema);

module.exports = users;
