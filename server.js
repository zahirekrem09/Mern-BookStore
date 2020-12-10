const express = require("express");
const connectDatabase = require("./helpers/db/connectDatabase");
require("dotenv").config();
const router = require("./routes/router");
//db Connect
connectDatabase();
// create express app
const app = express();
//Express Body Parser midd.
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`App started on ${PORT} - ${process.env.NODE_ENV}`);
});
