let guestCount = 99;

let engagementPromise = new Promise(function(resolve, reject){
    if(guestCount>100){
        reject('Wedding too big')
    } else{
        resolve('Let\'s get married')
    }
})
engagementPromise
.then(function(message){
    console.log('promise fulfilled');
    console.log(message);
})
.catch(function(message){
    console.log('promise rejected');
    console.log(message);
})
