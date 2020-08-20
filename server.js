const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");

// Initialization
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());

//Routes for API
app.use("/register", require("./api/register"));

console.log(process.env.NODE_ENV);
// For server in production
if (process.env.NODE_ENV === "production") {
  // to serve static content
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server started at port: ${PORT}`);
});
