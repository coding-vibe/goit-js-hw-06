const counter = document.querySelector('#value');
let counterValue = 0;

// -1
const btnDecr = document.querySelector('button[data-action="decrement"]');

const handleBtnDecrClick = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

btnDecr.addEventListener('click', handleBtnDecrClick);

// +1
const btnIncr = document.querySelector('button[data-action="increment"]');

const handleBtnIncrClick = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

btnIncr.addEventListener('click', handleBtnIncrClick);
