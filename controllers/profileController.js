const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");

const userProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

module.exports = {
  userProfile,
};
