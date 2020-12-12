const express = require("express");
const { body, validationResult, check } = require("express-validator");
const registerValidate = require("../middlewares/auth/InputValidate");

const { authRegister, authLogin } = require("../controllers/authController");

const router = express.Router();

/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/register
 */

router.post(
  "/register",
  //   registerValidate,
  [
    check("password", "Plase enter a password with 6 and more chars").isLength({
      min: 6,
      max: 20,
    }),
    check("email", "Plase email checked").isEmail(),
  ],
  authRegister
);
/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/auth/login
 */
router.post(
  "/login",
  [
    check("password", "Plase enter a password with 6 and more chars").isLength({
      min: 6,
      max: 20,
    }),
    check("email", "Plase email checked").isEmail(),
  ],
  authLogin
);

/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/auth/profile
 */

module.exports = router;
