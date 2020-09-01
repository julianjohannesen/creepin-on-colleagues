const { body, validationResult } = require("express-validator");

// Validate will validate the submitted form field using express-validate. The parameter is an array of validations. As it appears in the index.js route, there's only one: body("username"). The validation methods are then chained to the returned result.
export default function validate (["username"]) {
	// Return a middleware
	return (req, res, next) => {
        // Use express-validator's body() method to check that req.body.username is valid
		// The validations array only contains one validation at the moment, so using an array may seem like overkill, but any number of validations could appear here
        const validations = [
            body("username").not().isEmpty().isAlphanumeric().trim().isLength({ min: 2, max: 50 }),
		];
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