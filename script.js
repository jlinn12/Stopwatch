
const clock = document.getElementById('clock');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let myVar = setInterval(myTimer, 1000);

let secs = 0;

function myTimer() {
    
 secs++;

 clock.innerHTML = secs;

}
