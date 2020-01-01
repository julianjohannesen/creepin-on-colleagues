const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { asyncHandler, validate, getProfile, processProfile } = require("../helpers.js");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({"extended":"true"}));

// Profile data holder
let profile;

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
	//!NOTE: this whole async wrapper might be unnecessary, because request module probably handles all of of this
	asyncHandler(async (req, res, next) => {
		let treehouse = `https://teamtreehouse.com/${req.body.username}.json`;
		profile = await getProfile(treehouse);
		next();
	}),
	
	(req,res,next) => {
		processProfile(profile);
		next();
	},

	(req,res,next) => {
		res.render("profile", {profile});
	}
);

module.exports = router;
