const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const { body, validationResult } = require('express-validator/check');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const upload = multer();
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Parse multi-part form data
app.use(upload.array());
app.use(express.static('public'));


/*
ROUTES
*/

app.get('/', function(req,res){
    res.render('form');
});

app.post(
    // The route
    '/', 
    // Validation middleware
    [
    // username must be plain text
    body('username').not().isEmpty().trim().isAlphanumeric().isLength({min: 2, max: 25})
    ], 
    // Request/response handler
    (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send(`${req.body.username} was found.`)
});

/*
PORT
*/
let port = process.env.PORT || 3000
app.listen(port);