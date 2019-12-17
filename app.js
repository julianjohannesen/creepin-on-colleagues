const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const createError = require("http-errors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { body, validationResult } = require("express-validator");

const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");

const upload = multer();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// HTTP request logger middleware
app.use(logger('dev'));
// Parse HTTP request cookies
app.use(cookieParser());
// Parse HTTP requests with body-parser
app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Parse multi-part form data with multr
app.use(upload.array());
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use these routes
app.use("/", indexRouter);
app.use("/profile", profileRouter);

// catch 404 and forward to error handler from http-errors
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // Set message to err.message 
	res.locals.message = err.message;
    // In development, req.local.error is set to err
	res.locals.error = req.app.get("env") === "development" ? err : {};

    // Set the response status to err status or 500
	res.status(err.status || 500);
	// render the error page
	res.render("error");
});

// Export the app for use in bin/www
module.exports = app;
