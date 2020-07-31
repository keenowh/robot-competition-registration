const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");

// Initialization
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());

//Routes for API
app.use("/register", require("./api/register"));

// For server in production
if (process.env.NODE_ENV === "production") {
  // to serve static content
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server started at port: ${PORT}`);
});
