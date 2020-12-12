const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authRegister = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  //TODO1 : Input validate

  if (!firstName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Plase enter all fields",
    });
  }
  //TODO2: Check already registered  or Customerror Duplicate key error (code: 11000)

  const user = await User.findOne({ email }); // select("-password");
  if (user) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  //TODO3: Crpyt password 1 method   or pre hooks UserScheme  2 method
  // const salt = await bcrypt.genSalt(10);
  // newPassword  = await  bcrypt.hash(newUser.password,salt)
  //  const newUser = new User({
  //    firstName,
  //    lastName,
  //    email,
  //    password:newPassword
  //  });
  // await newUser.save()

  // res.status(200).json({
  // success: true,
  // data: user,

  //TODO4: Save the User

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const authLogin = (req, res) => {
  res.send("Login");
};

module.exports = {
  authRegister,
  authLogin,
};
