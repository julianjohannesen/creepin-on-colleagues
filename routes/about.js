var express = require("express");
var router = express.Router();

/* GET about page. */
router.get("/about", function(req, res, next) {
	res.render("about", {title: "Creepin' on Colleagues", subtitle: "A Dashboard for Treehouse Students"});
});

module.exports = router;
