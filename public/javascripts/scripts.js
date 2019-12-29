const pointsUl = document.getElementById("points");
const coursesUl = document.getElementById("courses");

// Re-order the item in a list by the criteria provided.
function sortThenRemoveDuplicates(parentUl){

    // get the course node list, turn it into an array, and store it in courseNodes
    const courseNodes = [...parentUl.querySelectorAll("li")];

    // If we're dealing with topics and points
    if(courseNodes[0].dataset.points){
        courseNodes
            .sort( (a, b) => parseInt(b.dataset.points) - parseInt(a.dataset.points) )
            .forEach( li => parentUl.append(li));
    // Else if we're dealing with courses
    } else {

        // getUniqueCourses returns an array of unique course nodes, sorted. 
        function getUniqueCourses(){

            // Loop over the unique course ids and find the course node associated with that id. Push the node to a new array of sorted, unique course nodes
            const uniqueCourseIds = getUniqueCourseIds();
            console.log(uniqueCourseIds)
            const uniqueCourseNodes = [];
            uniqueCourseIds.forEach(getCourseNode);
                    
            // Map over the course nodes to get their IDs, and then filter to return only unique course IDs
            function getUniqueCourseIds(){

                const theIds = courseNodes.map(getCourseId).sort();
                const theUniqueIds = theIds.filter(isCourseUnique);
                
                // getCourseName takes a course node and returns its id.
                function getCourseId(courseNode){ 
                    return courseNode.id;
                }

                // isCourseUnique takes a course id and index and returns a boolean telling us whether the index of that course in theIds is the same as the current index in the loop. The effect is to filter for unique course names.
                function isCourseUnique(courseId,index){ 
                    return theIds.indexOf(courseId) === index; 
                }

                // ["One", "One", "Two", "TwoOne", "Oneone"]
                //   courseId "One" | loop index 0 | indexOf "One" === 0 | 0=0 YES
                //   courseId "One" | loop index 1 | indexOf "One" === 0 | 1!=0 NO
                //   courseId "Two" | loop index 2 | indexOf "Two" === 2 | 2=2 YES
                //   courseId "Twoone" | loop index 3 | indexOf "TwoOne" === 3 | 3=3 YES

                console.log(theUniqueIds);
                return theUniqueIds;
            }

            // 
            function getCourseNode(courseId){
                courseNodes.forEach( courseNode => {
                    if(courseId === courseNode.id) uniqueCourseNodes.push(courseNode);
                });
            }

            return uniqueCourseNodes;
        }

        const uniqueCourses = getUniqueCourses();
        const frag = document.createDocumentFragment();
        uniqueCourses.forEach( li => frag.append(li) );
        parentUl.append(frag);
    }
}

// EVENT HANDLERS ------------------------------------------

function pointsHandler(){ sortThenRemoveDuplicates(pointsUl) }
function coursesHandler(){ sortThenRemoveDuplicates(coursesUl) }
function DCLHandlers(){
    pointsHandler();
    coursesHandler();
}

document.addEventListener("DOMContentLoaded", DCLHandlers);
