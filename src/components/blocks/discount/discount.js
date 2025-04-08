const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let timerMinutes = 10;
let timerSeconds = 0;

function updateTimerDisplay(hours, minutes, seconds) {
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
}

function countdown() {
    if (timerSeconds === 0) {
        if (timerMinutes === 0) {
            timerMinutes = 10;
            timerSeconds = 0;
        } else {
            timerMinutes--;
            timerSeconds = 59;
        }
    } else {
        timerSeconds--;
    }

    updateTimerDisplay(0, timerMinutes, timerSeconds);
}

updateTimerDisplay(0, timerMinutes, timerSeconds);
setInterval(countdown, 1000);
