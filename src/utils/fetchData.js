let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let DONE_STATUS = 4;
let HTTP_STATUS_DONE = 200;
let API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('get', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === DONE_STATUS){
                (xhttp.status === HTTP_STATUS_DONE)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api)) 
            }
        })
        xhttp.send();

    } )

}

module.exports = fetchData
