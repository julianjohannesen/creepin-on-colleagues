const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('form', {title: "Creepin' on Colleagues"});
});

router.post(
	'/',
    (req, res) => {
		res.redirect("/profile");
    }
);

module.exports = router;
