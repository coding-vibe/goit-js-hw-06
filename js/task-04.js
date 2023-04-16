const counter = document.querySelector('#value');
let counterValue = 0;

// -1
const buttonDecr = document.querySelector('button[data-action="decrement"]');

const handleClickDecr = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

buttonDecr.addEventListener('click', handleClickDecr);

// +1
const buttonIncr = document.querySelector('button[data-action="increment"]');

const handleClickIncr = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

buttonIncr.addEventListener('click', handleClickIncr);