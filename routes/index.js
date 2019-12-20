const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const request = require("request");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({"extended":"true"}));

// getProfile will fetch the profile data
function getProfile(url){
	return new Promise( (resolve,reject) => {
		// Fetch profile with request module
		request(
			// The endpoint
			url,
			// The request module callback
			(err, res, body) => {
				if(err){
					reject(err);
				} else {
					//!NOTE: Do I need to double check that the response statusCode was 200?
					const profile = JSON.parse(body);
					resolve(profile);
				}
			}
		)
	});
}

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("form", { title: "Creepin' on Colleagues" });
});

/* On post request to homepage, validate form submission, */
router.post(
	// The route
	"/",
<<<<<<< HEAD
	// Validation middleware for request
	[
		// username must be alphanumeric etc.
=======

	// Validate the submitted username using express-validate module
	[
		// username must be plain text, etc.
>>>>>>> learning-redirect
		body("username")
			.not()
			.isEmpty()
			.trim()
			.isAlphanumeric()
			.isLength({ min: 2, max: 25 })
	],
<<<<<<< HEAD
	// Request/response handler
	(req, res) => {
		try {
			// Finds the validation errors in this request and wraps them in an object with handy functions
			const errors = validationResult(req);
			// If there are errors, returns a json object with an errors property
			if (!errors.isEmpty()) {
				return res.status(422).json({ errors: errors.array() });
			}

			// The Treehouse API endpoint
			let th = `https://teamtreehouse.com/${req.body.username}.json`;
			res.json((request(th, function(err, response, body) {
				// Use request to fetch our data on the server side. request will return error, response and response body objects
				// If the response is good, parse the data and save it in theData, else log an error
				if (response.statusCode === 200) {
					console.log(JSON.parse(body))
					return JSON.parse(body);
				} else {
					console.error("Request module returned an error: ", err);
				}
			}))());
		
		} catch (err) {
			console.error("Error caught in router.post callback: ", err);
		}
=======

	// Handle validation errors
	(req, res, next) => {
		// Find any validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		// If there are errors, return a response to the client with the error and exit
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		// If there are no errors, move on to the next callback
		next();
	},

	(req, res, next) => {
		let treehouse = `https://teamtreehouse.com/${req.body.username}.json`;
		getProfile(treehouse)
			.then( profile => {
				res.render("profile", {profile});
			})
			.catch(error => {
				res.render("error", {error});
			});
>>>>>>> learning-redirect
	}
);

module.exports = router;
