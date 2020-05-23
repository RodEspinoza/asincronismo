let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let DONE_STATUS = 4;
let HTTP_STATUS_DONE = 200;
let API = 'https://rickandmortyapi.com/api/character/'

fetchData = (url_api, callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('get', url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === DONE_STATUS){
            if(xhttp.status === HTTP_STATUS_DONE){
                return callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error('Error ' + url_api);
                return(error, null);
            }
        }
    }
    xhttp.send();
}
fetchData(API, (error_1, result_1) => {
    if(error_1) return console.error(error_1);
    console.log(result_1[0])
    fetchData(API + result_1.results[0].id, (error_2, result_2) => {
        if(error_2) return console.error(error_2);
        fetchData(result_2.origin.url, (error_3, result_3) => {
            if(error_3) return console.error(error_3);
            console.log(result_2.name)
            console.log(result_3.dimension)
        })
    })
})
