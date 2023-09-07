
// setInterval(function (){
//     let time = new Date(); 
//     const container = document.getElementById('container');
//     container.innerText = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
// }, 1000)

// setInterval(function (){
//     let time = new Date(); 
//     const setInterval = document.getElementById('set-Interval');
//     setInterval.innerText = time.getHours() + ':' + time.getMinutes() + ':' + setTimeout(function() {});

// }, 1000)

// setInterval(function(){
//     let sec = setTimeout(0, 1000); 
//     let time = new Date(); 
//     const second = document.getElementById('seconds');


//     second.innerText = time.getHours() + ':' + time.getMinutes() + ':' + sec ;

// },1000)

// setInterval(function(){
//     let count = 0;
//     let countSet = setInterval(count, 1000) 
    
//     let time = new Date(); 
//     const timeDiv = document.getElementById('time');
//     timeDiv.innerText = time.getHours() + ':' + time.getMinutes() + ':' + countSet ;

// },1000)
 
// let complete = 'true';
// let promise = new Promise(function(resolve, reject){
//   if(complete){
//     resolve('I am successfull.');
//   }else{
//     reject('I am Fail.');
//   }
// })

// console.log(promise);

// function addNumbers(numberOne, numberTwo, cb) {

//         setTimeout(function () {
//         cb(numberOne + numberTwo);
//         }, 1000)
// }


// addNumbers(5, 15, function (result){
//     console.log('result ####', result);
// })


// function callBack(cb){
//   setTimeout(function(){
//     cb(20)

//   }, 3000)
// }

// callBack(function(result){
// console.log('Hello'+ result * 5);
// })


// const promise = new Promise(function (resolve, reject){
//     setTimeout(function (){
//         resolve('Hello World');
//     }, 10000)
// })

// console.log(promise);
// promise.then(function (result){
//     console.log('promise ####', result);
// })

const promise = new Promise(function(resolve, reject){
   let num = 0;
   if(num >= 1){
    setTimeout(function(){
        resolve('promise is successfull.');
    }, 2000)
   }

   if(num >= 0){
    setTimeout(function(){
        reject('promise is fail.');
    }, 2000)
   }
    
})

promise.then(function(approve){
console.log(approve);
})
promise.catch(function(rej){
    console.log(rej);
})

function addNumbers2(numberOne, numberTwo) {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            resolve(numberOne + numberTwo);
        }, 1000)
    })
}

addNumbers2(5, 5).then(function (r) {
    // return new Promise(function (resolve, reject){
    //     // setTimeout(function () {
    //     //     resolve(r + 5);
    //     // }, 1000)
    // })

    console.log(r);
})
.then(function (res) {
    console.log('res', res)
})

function callBack(numberOne, numberTwo){
 return new Promise(function(resole, reject){
   setTimeout(function(){
    resole(numberOne * numberTwo)
   }, 2000)
 })
}

callBack(10,10).then(function(callAnswer){
 return new Promise(function(resole, reject){
    resole(callAnswer - 10);
 }).then(function(answer){
    return new Promise(function(resolve, reject){
        resolve(answer - 10);
    })
 }).then(function(ans){
    return new Promise (function(resolve, reject){
        resolve(ans - 10);
    })
 }).then(function(seventy){
    return new Promise (function(resolve, reject){
        resolve(seventy - 10);
    })
 }).then(function(sixty){
    return new Promise (function(resolve, reject){
        resolve(sixty - 10);
    })
 }).then(function(fifty){
    return new Promise (function(resolve, reject){
        resolve(fifty - 10);
    })
 }).then(function(forty){
    return new Promise (function(resolve, reject){
        resolve(forty - 10);
    })
 }).then(function(thirty){
    return new Promise (function(resolve, reject){
        resolve(thirty - 10);
    })
 }).then(function(twenty){
    return new Promise (function(resolve, reject){
        resolve(twenty - 10);
    })
 }).then(function(tenth){
        console.log(tenth);
    })
})