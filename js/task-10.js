function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
let lastDivSize = 30;

const onClickElemsCreation = () => {
  const inputElValue = inputEl.value;
  const createBoxes = (inputElValue) => {
    const boxes = [];
    for (let i = 0; i < inputElValue; i += 1) {
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = getRandomHexColor();
      boxEl.style.width = `${lastDivSize}px`;
      boxEl.style.height = `${lastDivSize}px`;
      lastDivSize += 10;
      boxes.push(boxEl);
    };
    boxesEl.append(...boxes);
    btnDestroy.addEventListener('click', () => { boxesEl.innerHTML = '' });
  };
  return createBoxes(inputElValue);
};

btnCreate.addEventListener('click', onClickElemsCreation);


