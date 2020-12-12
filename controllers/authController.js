const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");

const authRegister = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  //TODO1 : Input validate  (express-validator )

  // check("password", "Plase enter a password with 6 and more chars").isLength({
  //   min: 6,
  //   max: 20,
  // });

  const validationErr = validationResult(req);

  if (validationErr.errors.length > 0) {
    return res.status(400).json({
      errors: validationErr.array(),
    });
  }

  // if (!firstName || !email || !password) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Plase enter require fields",
  //   });
  // }
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

const authLogin = async (req, res, next) => {
  const { email, password } = req.body;
  //TODO1 : Input validate  (express-validator )
  const validationErr = validationResult(req);

  if (validationErr.errors.length > 0) {
    return res.status(400).json({
      errors: validationErr.array(),
    });
  }
  //TODO2: Check user exist(compore password)
  const userData = await User.findOne({ email }).select("+password");
  //console.log(userData);
  if (!userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User does not  exists" }] });
  }
  const isMatch = await bcrypt.compare(password, userData.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ errors: [{ message: "Invalid credentials" }] });
  }
  //TODO3: Authentication (jwt)
  const token = jwt.sign({ userData }, process.env.JWT_SECRET_KEY, {
    expiresIn: 3600,
  });
  if (!token) {
    return res
      .status(400)
      .json({ errors: [{ message: "Couldnt sign the token" }] });
  }
  res.status(200).json({
    token,
    user: {
      id: userData._id,
      firstName: userData.firstName,
      email: userData.email,
    },
  });
};

module.exports = {
  authRegister,
  authLogin,
};
