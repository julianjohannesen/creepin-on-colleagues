const express = require("express");
const { check, body, validationResult } = require("express-validator");
const request = require("request");


// asyncHandler returns an asynchronous callback (a route handler) wrapped in a try catch block
//!NOTE: The error handling is not working here
function asyncHandler(cb){
	return async (req,res,next) => {
		try{
			await cb(req,res,next);
		} catch(err){
			res.render("error", {error: err});
		}
	}
}

// Validate will validate the submitted form field using express-validate module The parameter is an array of validations. As it appears in the index.js route, there's only one: body("username"). The validation methods are then chained to the returned result.
//!NOTE: I need to refactor this to be more flexible, e.g. take any number of string parameters and validate each
function validate(string){
	return async (req, res, next) => {
        const validations = [
            body(string).not().isEmpty().isAlphanumeric().trim().isLength({ min: 2, max: 50 }),
        ];
		await Promise.all(validations.map(validation => validation.run(req)));
		const errors = validationResult(req);
		if (errors.isEmpty()) return next();
		res.status(422).render("error", { errors: errors.array(), status: "Error 422" });
	};
}  

// getProfile will return a promise to fetch a string containing json data from the supplied url using the request module. On error the promise is rejected, on success, the string is parsed to json, and the promise resolves with the fetched data
function getProfile(url){
	return new Promise( (resolve,reject) => {
		// Fetch profile with request module
		request(
			// The endpoint
			url,
			// The request module callback
			(err, res, body) => {
				if(err){
                    //!NOTE: this is failing.
					reject(err);
				} else {
					//!NOTE: Do I need to double check that the response statusCode was 200?
					const profile = JSON.parse(body);
					resolve(profile);
				}
			}
		)
	});
}

module.exports = {asyncHandler, validate, getProfile};
