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
	(req, res) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		let theData;
		let th = `https://teamtreehouse.com/${req.body.username}.json`;
		request(th, function(err, res, body) {
			if (res.statusCode === 200) {
				theData = JSON.parse(body);
				//console.log(theData)
				//return theData;
			} else {
				console.log("Request module returned an error: ", err);
			}
		});

		console.log(theData.name, theData.points.total, theData.badges.length);
			
		res.locals.name = theData.name;
		res.locals.points = theData.points.total;
		res.locals.badges = theData.badges.length;

		res.render("profile");
	}
);

module.exports = router;
