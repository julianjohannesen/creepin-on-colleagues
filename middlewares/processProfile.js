const { courses } = require("../courses.json");
const asyncHandler = require("./asyncHandler.js");

// Each user's profile page is obtainable as JSON. The JSON object has a property "Badges" whose value is an array of objects representing courses. Completing several courses in a series can earn the user a badge. Each course object has several properties, including the course's name, url, icon url, date earned, and a courses property whose value is another array containing two objects. The first object contains the title and url of the series the course belongs to. The second object lists the title and url of this particular course in the series. A series might have a dozen different courses. In addition, courses might appear in more than one series.
/* THE JSON STRUCTURE
{
	name: "blah blah",
	profile_name: "bblah",
	... 
	badges: [
		{ // first badge
			id: 48538498234,
			name: "the name of the course",
			url: "https://asdf.com/asdf",
			icon_url: "https://asdf.com/asdf",
			earned_date: "2019-09-05T16:57:46.000Z"
			courses: [
				{
					title: "the name of series",
					url: "the series url",
					badge_count: 1
				},
				{
					title: "the name of the course again",
					url: "the course url",
					badge_count: 1
				}
			]
		},
		{ // second badge
		}
	]
}
*/

// processProfile returns a custom middleware that is itself returned by asyncHandler. asyncHandler returns a custom middleware that awaits the resolution of a callback before calling next(), or rendering an error page. The callback in this case processes the profile page's JSON, which was fetched in getProfile()
module.exports = function processProfile(){

	// asyncHandler returns an async function that awaits the resolution of a callback passed in to it.
	return asyncHandler(
		// The callback takes the profile JSON and collects a list of the names of series and individual courses. Here I'm calling them parent and child courses.
		(req,res) => {

			const profileJSON = res.profile
			console.log(res.profile)
		
			let parentCourses = [];
			
			// "Badges" is an array of course objects. Using reduce(), for each "badge", we'll push that badge's series title to our parentCourse array and the course title to our childCourses array. The child array is created by the accumulator in our reducer.
			const childCourses = profileJSON.badges
				.reduce((acc, currentBadge, ind) => {
					// Test whether the first course in the current Badge object has already been added to the accumulator. The badge's courses array lists the parent course first, before listing child courses.
					if (
						// Not every badge has courses and we only want to count the ones that do have courses
						currentBadge.courses.length > 0
					) {
						// If the parentCourses array does NOT already include the series title
						if (!parentCourses.includes(currentBadge.courses[0].title)) {
							// then push the new series title to the parentCourses array
							parentCourses.push(currentBadge.courses[0].title.trim());
						}
						// And push the child course to the childCourses array
						acc.push(currentBadge.courses[1].title.trim());
					}
					return acc;
			}, [])
				// Sort the child courses
				.sort();
		
			// Remove those last two pesky duplicates from parentCourses and then sort the parent courses.
			parentCourses = parentCourses.filter( (dupe,index) => parentCourses.indexOf(dupe) === index).sort();
		
			// In the reducer above, we end up with two arrays of titles. Now we want to get additional details for each series that a user completed. We use another reducer to accumulate courses objects from courses.json
			const completedCourses = parentCourses.reduce( (acc, currentTitle, ind) => {
				// courses is imported from courses.json
				courses.forEach( course => {
					if(currentTitle === course.Title){
						acc.push(course);
					}
				});
				return acc;
			}, []);
		
			// Create a new property to hold our array of completed course objects with course details
			profileJSON.completedCourses = completedCourses;
			// This is just an array of course titles right now
			profileJSON.childCourses = childCourses
		}
	);

} 