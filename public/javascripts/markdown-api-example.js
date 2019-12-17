const express = require("express"); 
const bodyParser = require("body-parser");
const showdown = require("showdown"); 
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;  
const jwt = require("jwt-simple");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());

const converter = new showdown.Converter();
converter.setOption("simplifiedAutoLink", "true");

const ADMIN = "admin";
const ADMIN_PASSWORD = "password";
const SECRET = "secret#1234";

passport.use(new LocalStrategy(handleLocalStrategy));

function handleLocalStrategy(username, password, done) {

	if (username === ADMIN && password === ADMIN_PASSWORD) {
		return done( null, jwt.encode({ username }, SECRET) );
	} else {
		handleErrors(error, user);
	}

	function handleErrors(err,user){
		if (err) { 
			return done(err); 
		}
		if (!user) {
			return done( null, false, { message: 'Incorrect username.' } );
		}
		if ( !user.validPassword(password) ) {
			return done( null, false, { message: 'Incorrect password.' } );
		}
	}
}

app.get("/", function(req, res) {
	res.send("Hello World!");
});


app.post(
	"/login",
	passport.authenticate("local", { session: false }),
	function(req, res) {
		/* If this function gets called, authentication was successful.*/
		res.send("Authenticated");
	}
);

app.post(
	"/convert",
	passport.authenticate(
		"local",
		{ session: false, failWithError: true }
	),
	function(req, res, next) {
		console.log("The user: ", req.user, "The body: ", req.body);
		if (
			typeof req.body.content == "undefined" ||
			req.body.content == null
		) {
			res.json(["error", "No data found"]);
		} else {
			const text = req.body.content;
			html = converter.makeHtml(text);
			res.json(["markdown", html]);
		}
	},
	function(err, req, res, next) {
		return res.status(401).send({ success: false, message: err });
	}
);

app.listen(3000, function() {
	console.log("Server running on port 3000");
});