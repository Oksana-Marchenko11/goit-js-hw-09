import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const selectTime = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dateBox = document.querySelector('[data-days]');
const hourBox = document.querySelector('[data-hours]');
const minBox = document.querySelector('[data-minutes]');
const secBox = document.querySelector('[data-seconds]');

buttonStart.disabled = true;
let endTime = 0;

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}

function calculateTime() {
    let timerID = setInterval(() => {
        let needWait = endTime - new Date().getTime();
        let result = convertMs(needWait);
        dateBox.textContent = addLeadingZero(result.days);
        hourBox.textContent = addLeadingZero(result.hours);
        minBox.textContent = addLeadingZero(result.minutes);
        secBox.textContent = addLeadingZero(result.seconds);
        if (minBox.textContent === '00' & secBox.textContent === '00') {
            clearInterval(timerID);
        }
    }, 1000);

}
// buttonStart.addEventListener('click', calculateTime);
buttonStart.addEventListener("click", () => calculateTime());
/********************************************************************************************/

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let currentTime = options.defaultDate.getTime();
        endTime = selectedDates[0].getTime();
        if (endTime <= currentTime) {
            window.alert('Please choose a date in the future')
        } else {
            buttonStart.disabled = false;
        };
    },
};

flatpickr(selectTime, options);