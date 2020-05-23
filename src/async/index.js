const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Do something async') , 3000)
        : reject(new Error('Test error'))
    })
}
const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something)
}


const anotherFunction = async () => {
    try {
        const doSomething = await doSomethingAsync()
        console.log("before")
        console.log(doSomething)
        console.log("after2")

    }
    catch(error){
        console.log(error)
    }
}
console.log('Before')
doSomething();
console.log('After')
anotherFunction()
