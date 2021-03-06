var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
const passport =require("passport");
const session = require('express-session');
//connecting to a database
require("dotenv").config();

var app = express();

require("./config/database");
require('./config/passport');

var indexRouter = require("./routes/index");
var cocktailsRouter = require("./routes/cocktails");
//adding review router
var reviewsRouter = require("./routes/review");
var glasswareRouter = require("./routes/glasswares");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: 'your_secret_key',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if(req.session.passport && typeof req.session.passport.user != "undefined"){
      res.locals.loggedIn = true;
  }
  next();
})

app.use("/", indexRouter);
app.use("/cocktails", cocktailsRouter);
//mounting reviews router
app.use("/", reviewsRouter);
app.use("/", glasswareRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
