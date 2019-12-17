const express = require('express');
const router = express.Router();
//const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const request = require("request");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("form", { title: "Creepin' on Colleagues" });
});

/* On post request to homepage, validate form submission, */
router.post(
	// The route
	"/",
	// Validation middleware
	[
		// username must be plain text
		body("username")
			.not()
			.isEmpty()
			.trim()
			.isAlphanumeric()
			.isLength({ min: 2, max: 25 })
	],
	// Request/response handler
	(req, res, next) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		// If there are errors, returns a json object with an errors property
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		next()
	},
	(req, res, next) => {
		// A holder for fetched data
		let theData;
		// The API endpoint
		let th = `https://teamtreehouse.com/${req.body.username}.json`;
		// Use request to fetch our data on the server side
		request(th, function(err, res, body) {
			// If the response is good, parse the data and save it in theData, else log an error
			if (res.statusCode === 200) {
				theData = JSON.parse(body);
			} else {
				console.error("Request module returned an error: ", err);
			}
		});
		next();
	},
	(req, res, next) => {
		console.log("What's up: ", theData);
			
		// Set up some local variables for the profile page
		res.locals.name = theData.name;
		res.locals.points = theData.points.total;
		res.locals.badges = theData.badges.length;

		// Render the profile page
		res.redirect("/profile");
	}
);

module.exports = router;
