const express = require("express");
const router = express.Router();
const {
  getBookList,
  getBookDetails,
} = require("../controllers/bookController");

// base url: /api/books

/**
 * @route   GET /api/books
 * @desc    Books Listing endpoint
 * @access  Public
 */
router.get("/", getBookList);

/**
 * @route   GET /api/books/details/:id
 * @desc    Books Details endpoint
 * @access  Public
 */
router.get("/details/:id", getBookDetails);

module.exports = router;
