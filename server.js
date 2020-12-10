const express = require("express");

const router = require("./routes/router");

const app = express();

app.use(express.json());

app.use("*", router);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
