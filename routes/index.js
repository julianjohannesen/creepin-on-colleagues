const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { asyncHandler, validate, getProfile }= require("../helpers.js");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({"extended":"true"}));

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("form", { title: "Creepin' on Colleagues" });
});

/* On post request to homepage, validate form submission, */
router.post(
	// The route
	"/",

	// Validate the submitted username
	validate("username"),

	// asyncHandler wraps the route handler in a try catch block. The callback fetches user profile data from Treehouse, and on success, renders the profile page
	asyncHandler(async (req, res, next) => {
		let treehouse = `https://teamtreehouse.com/${req.body.username}.json`;
		const profile = await getProfile(treehouse);
		res.render("profile", {profile});
	})
);

module.exports = router;
