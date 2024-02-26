let timerDisplay = document.querySelector('.timer');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;
let isRunning = false;
let elapsedTime = 0;


startbtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
    isRunning=true;
    
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerId);
    isRunning = false;
    elapsedTime = (mins * 60 + secs) * 100 + msec;
   
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
    isRunning = false;
    elapsedTime = 0;
   
});

function startTimer(){
    if(isRunning){
    
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }
    

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
    } else {
        // Display elapsed time when the timer is stopped
        let elapsedMins = Math.floor(elapsedTime / (60 * 100));
        let elapsedSecs = Math.floor((elapsedTime % (60 * 100)) / 100);
        let elapsedMsecs = elapsedTime % 100;

        let elapsedMsecString = elapsedMsecs < 10 ? `0${elapsedMsecs}` : elapsedMsecs;
        let elapsedSecsString = elapsedSecs < 10 ? `0${elapsedSecs}` : elapsedSecs;
        let elapsedMinsString = elapsedMins < 10 ? `0${elapsedMins}` : elapsedMins;



    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
    }
}
