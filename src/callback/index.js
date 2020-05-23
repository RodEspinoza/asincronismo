let sum = (num, num2) => num + num2;
let calc = (num, num2, callback) => {return callback(num, num2)}

function fecha(callback)
{
    console.log(new Date());
    setTimeout(function (){
        let date = new Date();
        callback(date);
    }, 3000)
}

function  printDate(dateNow){
    console.log(dateNow);
}
fecha(printDate);

let result = calc(2, 3, sum)
console.log(result)