const express = require('express');
const router = express.Router();
const { getProfile, processProfile, validate:{validate}, validate:{validationsArray} } = require('../middlewares/index.js');
//const {validate, validationsArray} = require("../middlewares/validate.js");

console.log(getProfile, validate);

router.use(express.json());
router.use(express.urlencoded({"extended":"true"}));

/* GET request for home page. */
router.get("/", function(req, res, next) {
	res.render("form", { title: "Creepin' on Colleagues" });
});

/* POST request for homepage */
router.post("/", 
	validate(validationsArray), 
	getProfile(), 
	processProfile(), 
	(req,res,next) => res.render("profile"));

module.exports = router;
