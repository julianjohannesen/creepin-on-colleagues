const express = require('express');
//const cookie = require("cookie-parser");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form', {title: "Creepin' on Colleagues"});
});

router.post(
    // The route
	'/',
	// This is where validation middle ware should appear
	// Handle request and response
    (req, res) => {
		// This where error checking should appear
		// Set a cookie. It seems that you can do this without any middlewear.
		res.cookie("username", req.body.username);
		// Then use the cookie-parser middlewear to read the value of the cookie. In index.js I required cookie-parser and used a app.use() to register it
		res.send(`You're interested in ${req.cookies.username ? req.cookies.username : req.body.username}`);
    }
);

module.exports = router;
