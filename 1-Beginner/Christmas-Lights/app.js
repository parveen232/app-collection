const lights = document.querySelectorAll('.light');

glow();

setInterval(glow, 1200);

function glow() {
    for (const light of lights) {
        const randCol = randomColor();
        light.style.backgroundColor = `${randCol}`;
        light.style.boxShadow = `0 0 40px ${randCol}`;
    }
}

function randomColor() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

function randomNumber() {
    return Math.floor(Math.random() * 266);
}