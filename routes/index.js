const express = require('express');
const router = express.Router();
const { asyncHandler, validate, getProfile, processProfile } = require("../middlewares");

router.use(express.json());
router.use(express.urlencoded({"extended":"true"}));

/* GET request for home page. */
router.get("/", function(req, res, next) {
	res.render("form", { title: "Creepin' on Colleagues" });
});

/* POST request for homepage */
router.post("/", validate("username"), getProfile(`https://teamtreehouse.com/${req.body.username}.json`), processProfile(res.fetchedPage), (req,res,next) => res.render("profile"));

module.exports = router;
