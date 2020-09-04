const { body, validationResult } = require("express-validator");

const validationsArray = [
    body("username").not().isEmpty().isAlphanumeric().trim().isLength({ min: 2, max: 50 }),
];

// Validate will validate the submitted form fields using express-validate. The parameter is an array of validations. Each validation is a call to body(), check(), etc. The validation methods are chained to the call. On success, the function returns the next() method, otherwise it renders the error page.
function validate (validations) {

	// Return a middleware to use on any route
	return async (req, res, next) => {
		// Await the resolution of running each validation test, e.g. body().blah().blah().run()
		await Promise.all(validations.map(validation => validation.run(req)));
		// The tests return a results function
		const errors = validationResult(req);
		// If the errors object is empty, move on to the next middleware
		if (errors.isEmpty()) return next();
		// Otherwise render the error template, passing in the errors array
		res.status(422).render("error", { errors: errors.array(), status: "Error 422" });
	};
}  

module.exports = {
    validationsArray, 
    validate
}