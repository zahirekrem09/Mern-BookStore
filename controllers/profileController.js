const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");

const userProfileInfo = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ message: "Server Error" }] });
  }
};

const updateProfileInfo = async (req, res, next) => {
  try {
    const editInfo = req.body;

    // console.log(req.user.userData);

    const user = await User.findByIdAndUpdate(req.user.userData._id, editInfo, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ message: "Server Error" }] });
  }
};

module.exports = {
  userProfileInfo,
  updateProfileInfo,
};
