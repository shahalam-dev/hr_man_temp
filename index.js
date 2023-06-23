const dotenv = require("dotenv").config();
const database = require("./lib/database/index").database;
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const middlewares = require("./middlewares");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
console.log(
  `******** Application started in ${process.env.NODE_ENV} mode ********`
);

// routes
app.use(express.static("agent_docs"));
app.use("/api/v1", routes);
app.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "success",
  });
});

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 404;
  err.statusCode = 404;
  next(err);
});

app.listen(process.env.PORT, () => {
  console.log("Server up on " + process.env.PORT);
  database.connectionTest();
});
