//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const middlewares = {};

//joining path of directory 
const directoryPath = path.join(__dirname);
//passing directoryPath and callback function
fs.readdirSync(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach( file => {
        middleware[file] = file; 
    });
});

module.exports = middlewares;