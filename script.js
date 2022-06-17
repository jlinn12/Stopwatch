
const clockSeconds = document.getElementById('clock-seconds');
const clockMinutes = document.getElementById('clock-minutes');
const clock = document.getElementById('clock');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let myVar = setInterval(myTimer, 1000);


let secs = 0;
let minutes = 0;
const emptyVal = 0;
           
function myTimer() {
 secs++;

 if (secs == 60) { minutes++; 
    clockMinutes.innerHTML = minutes;
    secs = 0
    clockSeconds.innerHTML = "0" + secs;
 } 
 if (secs <= 9) {
    clockSeconds.innerHTML = "0" + secs;
 }
 
 if (secs > 9) {
    clockSeconds.innerHTML = secs;

 }}
