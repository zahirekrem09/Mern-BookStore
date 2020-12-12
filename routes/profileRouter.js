const express = require("express");
const authCheck = require("../middlewares/auth/authCheck");

const { userProfile } = require("../controllers/profileController");

const router = express.Router();

/**
 * @access : Private
 * @desc : Login endpoint
 * @route :Post  /api/profile
 */
router.get("/", authCheck, userProfile);

module.exports = router;
