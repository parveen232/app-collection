const outsideContainer = document.querySelector('.outside-container');
const tlrValue = document.querySelector('.tlr');
const trrValue = document.querySelector('.trr');
const brrValue = document.querySelector('.brr');
const blrValue = document.querySelector('.blr');
const rstlrValue = document.querySelector('.rs-tlr');
const rstrrValue = document.querySelector('.rs-trr');
const rsbrrValue = document.querySelector('.rs-brr');
const rsblrValue = document.querySelector('.rs-blr');
const tlInput = document.querySelector('#tl-input');
const trInput = document.querySelector('#tr-input');
const brInput = document.querySelector('#br-input');
const blInput = document.querySelector('#bl-input');

const clipboardEl = document.querySelector('#clipboard');
const resultContainer = document.querySelector('.result-container');
const resultEl = document.querySelector('.result');

setInterval(() => {
    borderRadiusValues();
}, 100)

function borderRadiusValues() {
    tlRadiusValue();
    trRadiusValue();
    brRadiusValue();
    blRadiusValue();
}

function tlRadiusValue() {
    if (!tlInput.value || tlInput.value < 0) {
        outsideContainer.style.borderTopLeftRadius = `0`;
        tlrValue.innerHTML = `0`;
        rstlrValue.innerHTML = `0`;
    }
    else if (tlInput.value >= 0) {
        outsideContainer.style.borderTopLeftRadius = `${tlInput.value}px`;
        tlrValue.innerHTML = `${tlInput.value}px`;
        rstlrValue.innerHTML = `${tlInput.value}px`;
    }
}

function trRadiusValue() {
    if (!trInput.value || trInput.value < 0) {
        outsideContainer.style.borderTopRightRadius = `0`;
        trrValue.innerHTML = `0`;
        rstrrValue.innerHTML = `0`;
    }
    else if (trInput.value >= 0) {
        outsideContainer.style.borderTopRightRadius = `${trInput.value}px`;
        trrValue.innerHTML = `${trInput.value}px`;
        rstrrValue.innerHTML = `${trInput.value}px`;
    }
}

function brRadiusValue() {
    if (!brInput.value || brInput.value < 0) {
        outsideContainer.style.borderBottomRightRadius = `0`;
        brrValue.innerHTML = `0`;
        rsbrrValue.innerHTML = `0`;
    }
    else if (brInput.value >= 0) {
        outsideContainer.style.borderBottomRightRadius = `${brInput.value}px`;
        brrValue.innerHTML = `${brInput.value}px`;
        rsbrrValue.innerHTML = `${brInput.value}px`;
    }
}

function blRadiusValue() {
    if (!blInput.value || blInput.value < 0) {
        outsideContainer.style.borderBottomLeftRadius = `0`;
        blrValue.innerHTML = `0`;
        rsblrValue.innerHTML = `0`;
    }
    else if (blInput.value >= 0) {
        outsideContainer.style.borderBottomLeftRadius = `${blInput.value}px`;
        blrValue.innerHTML = `${blInput.value}px`;
        rsblrValue.innerHTML = `${blInput.value}px`;
    }
}

clipboardEl.addEventListener('click', () => {
    const result = resultEl.innerText;

    if (!result) { return }
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
    navigator.clipboard.writeText(result);
    resultEl.style.visibility = 'hidden';
    resultContainer.style.flexDirection = 'column';

    const displayText = document.createElement('h3');
    displayText.style.margin = `0`;
    displayText.innerText = 'Copied to clipboard';
    resultContainer.prepend(displayText);

    setTimeout(() => {
        displayText.remove()
        resultEl.style.visibility = 'visible';
        //is below line necessary ?
        resultContainer.style.flexDirection = 'row';
    }, 1000)
})