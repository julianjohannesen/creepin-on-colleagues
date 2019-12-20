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

	// Validate the submitted username using express-validate module
	[
		// username must be plain text, etc.
		body("username")
			.not()
			.isEmpty()
			.trim()
			.isAlphanumeric()
			.isLength({ min: 2, max: 25 })
	],

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
	}
);

module.exports = router;
