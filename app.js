const HTTPS = require('https');
const HTTP = require('http');

const url = 'https://teamtreehouse.com/';
const logError = error => console.error(error);
const cb = (response) => {

    if(response.statusCode === 200){

        let theData = ''; // this must be set to string
        const addData = data => {
            theData += data.toString();
            return theData;
        }
        const logData = () => {
            try{
                theData = JSON.parse(theData);
                const message = `${theData.name} has ${theData.points.total} points.`
                console.log(message);
                return message;
            } catch(error){
                logError("Error parsing data. " + error.message)
            }
        }

        response.on('data', addData);
        response.on('end', logData);

    } else {
    
        const message = 'Error getting profile. ' + HTTP.STATUS_CODES[response.statusCode];
        const statusCodeError = new Error(message);
        logError(statusCodeError);

    }
}

const getProfile = (url, username) => {
    try{
        const address = `${url}${username}.json`;
        const request = HTTPS.get(address, cb);
        request.on('error', logError);
        return request;
    } catch(error){
        logError("Error caught. " + error.message)
    }
}

getProfile(url, 'julianj');


