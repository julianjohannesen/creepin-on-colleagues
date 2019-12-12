const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { body, validationResult } = require("express-validator");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const upload = multer();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// HTTP request logger middleware
app.use(logger('dev'));
// Parse HTTP request cookies
app.use(cookieParser());
// Parse HTTP requests with body-parser
app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Parse multi-part form data
app.use(upload.array());
// Server static files
app.use(express.static(path.join(__dirname, 'public')));

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


/*
ROUTES
*/

// app.get('/', function(req,res){
    //     res.render('form');
    // });
    
    // app.post(
        //     // The route
        //     '/',
        //     // Validation middleware
        //     [
            //     // username must be plain text
            //     body('username').not().isEmpty().trim().isAlphanumeric().isLength({min: 2, max: 25})
            //     ],
            //     // Request/response handler
            //     (req, res) => {
                //     // Finds the validation errors in this request and wraps them in an object with handy functions
                //     const errors = validationResult(req);
                //     if (!errors.isEmpty()) {
                    //         return res.status(422).json({ errors: errors.array() });
//     }

//     console.log(req.body);
//     res.send(`${req.body.username} was found.`)
// });

/*
PORT
*/
// let port = process.env.PORT || 3000
// app.listen(port);

module.exports = app;