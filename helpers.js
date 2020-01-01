//!NOTE: request module has a promise version and I could probably use that here. There's also probably an async/await way to do this
//!NOTE: The error handling in the promise.reject method is not working
//!NOTE: I need to refactor the validate function to be more flexible, e.g. take any number of string parameters and validate each

const { body, validationResult } = require("express-validator");
const request = require("request");
const { courses } = require("./courses.json");

// asyncHandler returns an asynchronous callback (a route handler) wrapped in a try catch block
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

// getPage will return a promise to fetch a string containing json data from the supplied url using the request module. On error the promise is rejected, on success, the string is parsed to json, and the promise resolves with the fetched data.
function getPage(url){

	// Return a promise
	return new Promise( (resolve,reject) => {

		// Fetch the page with request module
		request(url, callback);

		// The request module callback
		function callback(err, res, body){
			// Handle reject and resolve cases
			if(err){ reject(err) } // this is failing.	
			else{ resolve(JSON.parse(body)) }
		}
	});
}

function processProfile(profile){

	// "Badges" is an array of course objects. Using reduce(), for each "badge", we'll push that badge's courses to a parentCourse array or to the accumulator, which we'll store in childCourses.
	let parentCourses = [];

	let childCourses = profile.badges
		.reduce((acc, currentBadge, ind) => {
			// Test whether the first course in cur have already been added to the accumulator. The badge courses array lists the parent course first, before listing child courses.
			if (currentBadge.courses.length > 0) {
				// If the parentCourses array does NOT already include a course title
				if (!parentCourses.includes(currentBadge.courses[0].title)) {
					// then push the new parent course title to the parentCourses array
					parentCourses.push(currentBadge.courses[0].title.trim());
				}
				// And push the child course to the childCourses array
				acc.push(currentBadge.courses[1].title.trim());
			}
			return acc;
	}, [])
		.sort();

	// Remove those last two pesky duplicates from parentCourses and then sort the array.
	parentCourses = parentCourses.filter( (dupe,index) => parentCourses.indexOf(dupe) === index).sort();

	const completedCourses = parentCourses.reduce( (acc, currentTitle, ind) => {
		courses.forEach( course => {
			if(currentTitle === course.Title){
				acc.push(course);
			}
		});
		return acc;
	}, []);

	profile.completedCourses = completedCourses;
	// This is just an array of course titles right now
	profile.childCourses = childCourses

}

module.exports = {asyncHandler, validate, getPage, processProfile};
