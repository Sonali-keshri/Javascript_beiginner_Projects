let displayTime = document.getElementById('displayTime');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let timer = null

let hour = 0;
let minute = 0;
let second = 0;


function stopWatch() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    // displayTime.innerHTML = hour +":"+ minute +":"+second;
    displayTime.innerHTML = `${hour < 10 ? "0" + hour : hour}` + `:${minute < 10 ? "0" + minute : minute}` + `:${second < 10 ? "0" + second : second}`;

}
// function to start the timer
start.addEventListener('click', function () {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
})

// Stop the timer
stop.addEventListener('click', function () {
    clearInterval(timer)
})

// Reset the timer
reset.addEventListener('click', function () {
    hour = 0;
    minute = 0;
    second = 0;
    clearInterval(timer)
    displayTime.innerHTML = `${hour < 10 ? "0" + hour : hour}` + `:${minute < 10 ? "0" + minute : minute}` + `:${second < 10 ? "0" + second : second}`;

})


