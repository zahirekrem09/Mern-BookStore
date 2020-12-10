const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firtName: {
    type: String,
    required: [true, "Please provide a firtName"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a lastName"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide a email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    minlength: [6, "Please provide a password with min lenght 6"],
    required: [true, "Please provide a password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  //   role: {
  //     type: String,
  //     default: "user",
  //     enum: ["user", "admin"],
  //   },
});

module.exports = mongoose.model("User", UserSchema);
