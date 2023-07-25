const buttonStart = document.querySelector('[data-start]');
console.log(buttonStart);
const buttonClose = document.querySelector('[data-stop]');
console.log(buttonClose);
const body = document.querySelector('body');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
buttonClose.disabled = true;
function onStart() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    buttonStart.disabled = true;
    buttonClose.disabled = false;
};
function onStop() {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonClose.disabled = true;
};

buttonStart.addEventListener('click', onStart);
buttonClose.addEventListener('click', onStop)

