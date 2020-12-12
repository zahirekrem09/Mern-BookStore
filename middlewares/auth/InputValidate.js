const { body, validationResult } = require("express-validator");

const registerValidate = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  body("email").isEmail();
  body("password").isLength({
    min: 6,
  });
  body("lastName").exists();
  body("firstName").exists();

  next();
};

module.exports = registerValidate;

// const { check, validationResult } = require("express-validator");
// exports.authValidationPassWord = check(
//   "password",
//   "Please enter password with 6 and more character"
// ).isLength({
//   min: 6,
// });
// exports.authValidationEmail = check(
//   "email",
//   "Please enter valid a email "
// ).isEmail();
