const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();
const app = express();

app.set('view-engine': 'pug');
app.set('views', './views');

app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: true })); k
// Parse multi-part form data
app.use(upload.array());
app.use(express.static('public'));


/*
ROUTES
*/

app.get('/', function(req,res){
    res.render('form');
});

app.post('/', function(req,res){
    console.log(req.body);
    res.send("received your request")
});

/*
PORT
*/
app.listen(3000);