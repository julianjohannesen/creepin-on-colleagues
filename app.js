const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const createError = require("http-errors");

// Initialize multer and express
const upload = multer();
const app = express();

// Set the view engine and ensure server can find views directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// Log HTTP request middleware
app.use(logger("dev"));
// Parse HTTP request cookies
app.use(cookieParser());
// Parse HTTP requests with body-parser
app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Parse multi-part form data with multer
app.use(upload.array());
// Server static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Require these routes
const indexRouter = require("./routes/index.js");
const profileRouter = require("./routes/profile.js");
const aboutRouter = require("./routes/about.js");

// Use these routes
app.use("/profile", profileRouter);
app.use("/about", aboutRouter);
app.use("/", indexRouter);

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

module.exports = app;
