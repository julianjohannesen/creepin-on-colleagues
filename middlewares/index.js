const fs = require('fs');

// Get the names of files in the middlewares directory
const fileNames = fs.readdirSync("./middlewares");

// Export an object containing each middleware
module.exports = fileNames.reduce( (acc, currentFileName) => {
    if(currentFileName !== "index.js"){
        acc[currentFileName.slice(0,-3)] = require("../middlewares/" + currentFileName);
    }
    return acc;
}, {});
