// Re-order the topics and points in descending order by points
function reorder(){
    const pointsUl = document.getElementById("points");
    [...pointsUl.querySelectorAll("li")]
        .sort((a,b) => parseInt(b.dataset.points) - parseInt(a.dataset.points))
        .forEach( li => pointsUl.append(li) );
}

document.addEventListener("DOMContentLoaded", reorder);