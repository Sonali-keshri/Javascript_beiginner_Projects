let days = document.querySelector("#days");
let hours = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let second = document.querySelector("#sec");

let countDateString = "20 Dec 2023 00:00 AM "


setInterval(() => {
    let countDate = new Date(countDateString);
    let currentDate = new Date();
    
    let diff = (countDate - currentDate) / 1000;

    function formatDate(time) {
        let day = Math.floor(time / (60 * 60 * 24));
        let hour = Math.floor(time % (60 * 60 * 24) / (60 * 60));
        let min = Math.floor(time % (60 * 60) / (60));
        let sec = Math.floor(time % 60);
        return { day, hour, min, sec };
    }

    let date = formatDate(diff)

    let { day, hour, min, sec } = date;

    days.innerHTML = day < 10 ? "0" + day : day;
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = min < 10 ? "0" + min : min;
    second.innerHTML = sec < 10 ? "0" + sec : sec;

}, 1000)



// 1 days = 24hr
// 1 hr = 60min
// 1 min = 60 sec
// 1 sec = 1000 ms