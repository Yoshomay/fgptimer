const secondsSpan = document.getElementById('seconds');
const durationInput = document.getElementById('durationInput');

let duration;
let i;
let timer = null;

function setColor() {
    if      (i == 3) secondsSpan.style.color = 'yellow';
    else if (i == 2) secondsSpan.style.color = 'orange';
    else if (i == 1) secondsSpan.style.color = 'red';
}

document.getElementById('confirmBTN').addEventListener("click", () => {
    if (['', '0', '1'].includes(durationInput.value)) {alert('Please use a number greater than 1'); return}
    duration = Number(durationInput.value);

    clearInterval(timer);
    secondsSpan.style.color = 'white';

    i = duration;
    secondsSpan.textContent = `${duration}`;
    setColor();
    i--;

    timer = setInterval(() => {
        if (i == duration) secondsSpan.style.color = 'white';
        secondsSpan.textContent = `${i}`;
        setColor();

        i--;
        if (i < 1) {i = duration;}
    }, 1000);
});

document.getElementById('stopBTN').addEventListener("click", () => {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    secondsSpan.innerHTML = `<u>&nbsp;&nbsp;</u>`;
    secondsSpan.style.color = 'white';
})

durationInput.addEventListener('input', () => {
  durationInput.value = durationInput.value.replace(/[^0-9-]/g, '');
});