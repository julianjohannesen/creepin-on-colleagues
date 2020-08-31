//!NOTE: request module has a promise version and I could probably use that here. There's also probably an async/await way to do this
//!NOTE: The error handling in the promise.reject method is not working
//!NOTE: I need to refactor the validate function to be more flexible, e.g. take any number of string parameters and validate each

const { body, validationResult } = require("express-validator");
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
	// Return a middleware
	return async (req, res, next) => {
		// The validations array only contains one validation at the moment, so using an array may seem like overkill, but any number of validations could appear here
        const validations = [
            body(string).not().isEmpty().isAlphanumeric().trim().isLength({ min: 2, max: 50 }),
		];
		// Await the resolution of running each validation test
		await Promise.all(validations.map(validation => validation.run(req)));
		// The tests return a results function
		const errors = validationResult(req);
		// If the errors object is empty, move on to the next middleware
		if (errors.isEmpty()) return next();
		// Otherwise render the error template, passing in the errors array
		res.status(422).render("error", { errors: errors.array(), status: "Error 422" });
	};
}  

// getPage wraps a fetch call in an async handler
function getPage(url,options){
	asyncHandler((req,res,next)=>{
		return fetch(url, options).then( response => {
			// Fetch considers HTTP errors to be successes, so catch HTTP errors here
			if(!response.ok) {
				throw Error(response.statusText)
			} else {
				return response.json();
			}
		});
	});
}

function processProfile(profile){

	// "Badges" is an array of course objects. Using reduce(), for each "badge", we'll push that badge's courses to a parentCourse array or to the accumulator, which we'll store in childCourses.
	let parentCourses = [];

	const childCourses = profile.badges
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

// Slow down
// I want to request a page using the request module (or fetch)
// Then I want to take the page html and process it by selecting dom elements and getting their text content etc.
// After processing the page html, I'll have an array of objects
// Then I want to stringify the array (JSON.stringify)
// Then I want to write the new json to a file

// "https://teamtreehouse.com/library/type:practice"
//!NOTE: this is fetching unprocessed html. my getPage isn't set up for that, so i'll need to do some editing
asyncHandler( async (req,res,next) => {
	practicesData = await getPage(url);
} );
function processCoursesEtc(){
	const cardList = [...document.querySelectorAll('.card-list li.card')];
    
    function buildObjectArray(listArray){

        const coursesArr = listArray.reduce( (acc,card,ind)=>{

            const id = card.id || "noid";
            const url = card.querySelector("a.card-box").href || "#";
            const timeEst = card.querySelector(".card-estimate") && card.querySelector(".card-estimate").textContent.trim() || "No estimate available";
            const type = card.querySelector(".card-type") && card.querySelector(".card-type").textContent.trim() || "No type available"; 
            const title = card.querySelector(".card-title") && card.querySelector(".card-title").textContent.trim() || "No title available";
            const description = card.querySelector(".card-description") && card.querySelector(".card-description").textContent.trim() || "No description available";
            const topic = card.querySelector(".topic") && card.querySelector(".topic").textContent.trim() || "No topic available";
            const difficulty = card.querySelector(".difficulty") && card.querySelector(".difficulty").textContent.trim() || "Difficulty not available";

            const cardToJson = {
                "id": id,
                "url": url,
                "timeEst": timeEst,
                "type": type,
                "title": title,
                "description": description,
                "topic": topic,
                "difficulty": difficulty
            }
            acc.push(cardToJson);
            return acc
        } , []);

        let coursesSorted = coursesArr.sort((a,b) => a.title > b.title ? 1 : -1);

        return coursesSorted

    }

	const practicesArray = buildObjectArray(cardList);
	
	// Write the array of objects to the appropriate file
	let data = JSON.stringify(practicesArray);
	fs.writeFileSync('./practices.json', data);
}

module.exports = {asyncHandler, validate, getPage, processProfile};
