const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEL = document.getElementById('ampm');

let clock = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = 'AM';

    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    ampmEL.innerHTML = ampm;
    setTimeout(() => {
        clock();
    }, 1000);
};
clock();