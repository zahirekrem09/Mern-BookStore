const express = require("express");

const { authRegister, authLogin } = require("../controllers/authController");

const router = express.Router();

/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/register
 */

router.post("/register", authRegister);
/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/auth/login
 */
router.post("/login", authLogin);

module.exports = router;
