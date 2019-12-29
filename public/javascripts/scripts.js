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

                return theUniqueIds;
            }

            function getCourseNode(courseId){
                for(let i=0; i<courseNodes.length; i++){
                    if(courseId === courseNodes[i].id){
                        uniqueCourseNodes.push(courseNodes[i]);
                        break;
                    }
                    
                }
            }

            return uniqueCourseNodes;
        }

        const uniqueCourses = getUniqueCourses();
        console.log(uniqueCourses);
        const fragment = new DocumentFragment();
        fragment.append(...uniqueCourses);
        parentUl.innerHTML = ' ';
        parentUl.append(fragment);
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
