const express = require('express');
const router = express.Router();
const { asyncHandler, validate, getPage, processProfile } = require("../helpers.js");

router.use(express.json());
router.use(express.urlencoded({"extended":"true"}));

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
	asyncHandler(async (req, res, next) => {
		profile = await getPage(`https://teamtreehouse.com/${req.body.username}.json`);
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
