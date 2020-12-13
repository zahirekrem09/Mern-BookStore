const express = require("express");
const authRouter = require("./authRouter");
const profileRouter = require("./profileRouter");
const bookRouter = require("./bookRouter");

const router = express.Router();
/**
 * @desc : Route for Auth
 * @route :Post  /api/auth
 */
router.use("/auth", authRouter);
/**
 * @desc : Route for Auth
 * @route :Post  /api/profile
 */
router.use("/profile", profileRouter);

/**
 * @route : /api/books
 * @desc  : Route for Book
 */
router.use("/books", bookRouter);

module.exports = router;
