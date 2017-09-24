const startCountdown = () => {
    let m = Math.floor(countdownSeconds / 60),
        s = countdownSeconds - (m * 60);

    counterMin.innerHTML = m;
    counterSec.innerHTML = formatSeconds(s);
    countdownSeconds--;

    if (countdownSeconds === 0) {
        clearInterval(timer);
    }
};

const formatSeconds = sec => {
    return sec < 10 ? `0${sec}` : sec;
};

let countdownSeconds = 1600,
    container = document.getElementsByClassName('container')[0],
    counterMin = document.getElementsByClassName('counter-min')[0],
    counterSec = document.getElementsByClassName('counter-sec')[0],
    timer = setInterval(startCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    container.style.setProperty('--animation-time', `${countdownSeconds}s`, '');
});
