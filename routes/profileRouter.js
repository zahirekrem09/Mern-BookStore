const express = require("express");
const { body, validationResult, check } = require("express-validator");
const registerValidate = require("../middlewares/auth/InputValidate");

const { userProfile } = require("../controllers/profileController");

const router = express.Router();

/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/profile
 */
router.post("/profile", userProfile);

module.exports = router;
