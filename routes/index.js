const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const request = require("request");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("form", { title: "Creepin' on Colleagues" });
});

/* POST search result on form submission */
router.post(
	// The route
	"/",
	// Validation middleware for request
	[
		// username must be alphanumeric etc.
		body("username")
			.not()
			.isEmpty()
			.trim()
			.isAlphanumeric()
			.isLength({ min: 2, max: 25 })
	],
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
	}
);

module.exports = router;
