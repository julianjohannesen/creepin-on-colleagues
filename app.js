const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const createError = require("http-errors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/profile");

const upload = multer();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// HTTP request logger middleware
app.use(logger("dev"));
// Parse HTTP request cookies
app.use(cookieParser());
// Parse HTTP requests with body-parser
app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Parse multi-part form data
app.use(upload.array());
// Server static files
app.use(express.static(path.join(__dirname, "public")));

// Use these routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
