// asyncHandler is a middleware that returns an asynchronous callback (a route handler) wrapped in a try catch block and then calls next()
export default function asyncHandler(cb){
	return async (req,res,next) => {
		try {
			await cb(req,res);
			//! I'm not positive about where to put next()
			next();
		} 
		catch(err) {
			res.render("error", {error: err});
		}
	}
}