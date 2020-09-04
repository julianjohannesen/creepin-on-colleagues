

// // 1. request page
// // 2. process page html by selecting dom elements and getting their text content etc.
// // 3. return an array of objects
// // 4. stringify the array (JSON.stringify)
// // 5. write the new json to a file

// // "https://teamtreehouse.com/library/type:practice"
// //!NOTE: this is fetching unprocessed html. my getProfile isn't set up for that, so i'll need to do some editing
// asyncHandler( async (req,res,next) => {
// 	practicesData = await getProfile(url);
// } );

// export function processCoursesEtc(){
// 	const cardList = [...document.querySelectorAll('.card-list li.card')];
    
//     function buildObjectArray(listArray){

//         const coursesArr = listArray.reduce( (acc,card,ind)=>{

//             const id = card.id || "noid";
//             const url = card.querySelector("a.card-box").href || "#";
//             const timeEst = card.querySelector(".card-estimate") && card.querySelector(".card-estimate").textContent.trim() || "No estimate available";
//             const type = card.querySelector(".card-type") && card.querySelector(".card-type").textContent.trim() || "No type available"; 
//             const title = card.querySelector(".card-title") && card.querySelector(".card-title").textContent.trim() || "No title available";
//             const description = card.querySelector(".card-description") && card.querySelector(".card-description").textContent.trim() || "No description available";
//             const topic = card.querySelector(".topic") && card.querySelector(".topic").textContent.trim() || "No topic available";
//             const difficulty = card.querySelector(".difficulty") && card.querySelector(".difficulty").textContent.trim() || "Difficulty not available";

//             const cardToJson = {
//                 "id": id,
//                 "url": url,
//                 "timeEst": timeEst,
//                 "type": type,
//                 "title": title,
//                 "description": description,
//                 "topic": topic,
//                 "difficulty": difficulty
//             }
//             acc.push(cardToJson);
//             return acc
//         } , []);

//         let coursesSorted = coursesArr.sort((a,b) => a.title > b.title ? 1 : -1);

//         return coursesSorted

//     }

// 	const practicesArray = buildObjectArray(cardList);
	
// 	// Write the array of objects to the appropriate file
// 	let data = JSON.stringify(practicesArray);
// 	fs.writeFileSync('./practices.json', data);
// }