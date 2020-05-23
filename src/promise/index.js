const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        }
        else{
            reject('Ups!')
        }
    })
}

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {resolve('True')}, 200)
        }
        else{
            const error = new Error('Whoops');
            reject(error);
        }
    })
}
somethingWillHappen().then(response => console.log(response)).catch(
    
        error => console.log(error)
    
)
somethingWillHappen2().then(
    response => console.log(response)

).then(
    () => console.log('Holi')
)
.catch(
    error => console.log(error)
)

Promise.all([somethingWillHappen(), somethingWillHappen2()]).then(
    response => console.log('Array of results '+ response)
).catch(err => {console.error(err)})