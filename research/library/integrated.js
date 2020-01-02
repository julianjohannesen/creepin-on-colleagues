// const courses = require('./courses.json');
// const practices = require('./practices.json');
// const workshops = require('./workshops.json');

// const integrated = [...courses, ...practices, ...workshops];

var fs = require('fs');

fs.readFile('./courses.html', (err, data) => {
    if (err) throw err;
    console.log(data);
});
