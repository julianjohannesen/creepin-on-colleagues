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

    // getUniqueCourses takes a course node and returns it, only if the course node's id can be found in the array unique course IDs returned by getUniqueCourseIds(). 
    //!NOTE: This might seem like a round about way to return an array of unique nodes based on each node's id, but I can't think of any other way.
    function getUniqueCourses(courseNode){

        // Map over the course nodes to get their IDs, and then filter to return only unique course IDs
        const uniqueCourseIds = getUniqueCourseIds();
        
        // Loop over the courses and for each course id return only the first courseNode in courseNodes that has that id
        //!NOTE: Do this with reduce
        //!NOTE: bundle this bit up in a getUniqueCourseNodes function just like I did for getUniqueCourseIds
        const uniqueCourseNodes = [];
        courseNodes.forEach(getCourseNode);
        
        console.log(uniqueCourseNodes); // doesn't work
        
        // Get an array of unique course ids
        function getUniqueCourseIds(){

            const theIds = courseNodes.map(getCourseId);
            const theUniqueIds = theIds.filter(isCourseUnique);
            
            // getCourseName takes a course node and returns its id.
            function getCourseId(courseNode){ 
                return courseNode.id;
            }

            // isCourseUnique takes a course id and index and returns a boolean telling us whether the index of that course in theIds is the same as the current index in the loop. The effect is to filter for unique course names.
            function isCourseUnique(courseId,index){ 
                return theIds.indexOf(courseId) === index; 
            }

            return theUniqueIds;
        }

        // 
        function getCourseNode(courseNode, index){
            if(courseNode.id === uniqueCourseIds[index]) uniqueCourseNodes.push(courseNode);
        }


    }

    courseNodes
        .map(getUniqueCourses)
        .forEach( li => parentUl.append(li) );
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
