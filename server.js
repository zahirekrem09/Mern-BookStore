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

// Expreess static midd.  heroku prod.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`App started on ${PORT} - ${process.env.NODE_ENV}`);
});
