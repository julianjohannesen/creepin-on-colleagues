const asyncHandler = require("./asyncHandler.js");
const fetch = require("node-fetch");

// getProfile wraps a fetch call in an async handler


module.exports = function getProfile(options){
	return asyncHandler((req,res,next)=>{
		//! I have a problem generalizing this function because I don't have access to the request until I'm inside the callback, so I can't pass in a username to getProfile. I could add some conditional logic to say that if a profile is wanted, then construct the url like this, and if the courses page is wanted, then construct the URL like that, etc.
		const user = req.body.username + ".json";
		return fetch("https://teamtreehouse.com/" + user, options).then( fetchResponse => {
			// Fetch considers HTTP errors to be successes, so catch HTTP errors here
			if(!fetchResponse.ok) {
				throw Error(fetchResponse.statusText)
			} else {
				res.fetchedPage = fetchResponse.json();
				// Attaching stuff to the response worked jsut fine
				res.testthing = "this is the test thing";
				console.log(res.fetchedPage, res.testthing)
			}
		});
	});
}