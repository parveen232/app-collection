const binNum = document.querySelector('.binary-num');
const decNum = document.querySelector('.decimal-num');
const convertBtn = document.querySelector('.convert');

let input = prompt('Enter a binary number and get a decimal:');

convertBtn.addEventListener('click', () => {
    input = prompt('Enter a binary number and get a decimal:');
    binNum.innerText = input;
    decNum.innerText = binToDec();
})

binNum.innerText = input;
decNum.innerText = binToDec();

function binToDec() {
    let current = 0;

    while (current < input.length) {
        let char = input[current];

        if (/[0-1]/.test(char)) {
            current++;
        }
        else {
            return 'Invalid Input';
        }
    }
    if (current == input.length) {
        let decOut = parseInt(input, 2);
        return decOut;
    }
}
