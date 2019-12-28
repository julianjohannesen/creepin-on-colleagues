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

        // Loop over the course ids and for each course id return only the first courseNode in courseNodes that has that id
        getUniqueCourseIds().forEach(getCourseNode);
        
        // Get an array of unique course ids
        function getUniqueCourseIds(){
            return courseNodes
                .map(getCourseId)
                .sort()
                .filter(isCourseUnique);

            // getCourseName takes a course node and returns its id.
            function getCourseId(courseNode){ 
                return courseNode.id;
            }

            // isCourseUnique takes a course id and index and returns a boolean telling us whether the index of that course in the array of course ids returned by courseNodes.map(getCourseId) is the same as the current index in that same array. The effect is to filter for unique course names.
            function isCourseUnique(id,index){ 
                return courseNodes.indexOf(id) === index; 
            }
        }

        function getCourseNode(courseId){
            if(courseId === courseNode.id) return courseNode;
        }


    }

    courseNodes
        .map(getUniqueCourses)
        .forEach( li => parentUl.append(li) );
    }
}

// EVENT HANDLERS ------------------------------------------

function pointsHandler(){ reorder(pointsUl) }
function coursesHandler(){ reorder(coursesUl) }
function DCLHandlers(){
    pointsHandler();
    coursesHandler();
}

document.addEventListener("DOMContentLoaded", DCLHandlers);
