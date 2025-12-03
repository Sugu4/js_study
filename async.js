console.log('1');
console.log('2');
console.log('3');

function logFour(){
    console.log(4);
}

function logFive(){
    logFour();
    console.log(5);
}

function longRunning(){
    console.log('log running task');

    for(let i = 0; i < 10_000_000_000; i++){

    }
}
logFive();

setTimeout(()=> console.log("2000ms"), 2000
);
setTimeout(()=> console.log('100ms'), 100
);

