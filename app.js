var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var puppeteer = require("puppeteer");

var indexRouter = require("./routes/index");
var templateRouter = require("./routes/template");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.get("/template", templateRouter);

//####################### Listen Requests  #################
// set port
const PORT = process.env.PORT || 8080;

// server
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`);
});
