const pointsUl = document.getElementById("points");
const coursesUl = document.getElementById("courses");

// Re-order the item in a list by the criteria provided.
function reorder(parentUl){
    // Array of new objects with key of item.id and value of list items
    const items = [...parentUl.querySelectorAll("li")].map(item => ({id: item.id, listItem: item}));
    items
        .sort((a,b) => {
            if(a.listItem.dataset.points){
                return parseInt(b.listItem.dataset.points) - parseInt(a.listItem.dataset.points);
            } else {
                console.log()
                return b.id-a.id;
            }
        })
        .forEach( li => parentUl.append(li.listItem) );
}

//? NOTE: What's the best method for adding multiple listeners to the same event? 
document.addEventListener("DOMContentLoaded", ()=>reorder(pointsUl));
document.addEventListener("DOMContentLoaded", ()=>reorder(coursesUl));