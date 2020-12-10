const express = require("express");

const router = express.Router();

router.get("/api", (req, res, next) => {
  res.send("Api page");
});
router.get("/", (req, res, next) => {
  res.send("home page");
});

module.exports = router;
