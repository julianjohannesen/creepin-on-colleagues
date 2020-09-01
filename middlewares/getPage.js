const asyncHandler = require("./asyncHandler.js");

// getProfile wraps a fetch call in an async handler
export default function getProfile(url,options){
	return asyncHandler((req,res,next)=>{
		return fetch(url, options).then( fetchResponse => {
			// Fetch considers HTTP errors to be successes, so catch HTTP errors here
			if(!fetchResponse.ok) {
				throw Error(fetchResponse.statusText)
			} else {
				res.fetchedPage =  fetchResponse.json();
			}
		});
	});
}