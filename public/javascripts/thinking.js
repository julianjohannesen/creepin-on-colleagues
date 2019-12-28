// I've got an array of nodes (NOT a node list)
const myNodes = [{id:"one"},{id:"two"},{id:"one"}];

// I want the same array, but with the duplicates removed
myNodes.filter( (node, index) => {
    return myNodes.indexOf(node) === index;
}); //?