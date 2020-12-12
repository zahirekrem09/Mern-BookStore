const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");

const userProfile = (req, res, next) => {
  const { email, password } = req.body;
};

module.exports = {
  userProfile,
};
