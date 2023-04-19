function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes')

const onClickElemsCreation = () => {
  const inputElValue = inputEl.value;
  const createBoxes = (inputElValue) => {
    const boxes = [];
    let size = 30;
    for (let i = 0; i < inputElValue; i += 1) {
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = getRandomHexColor();
      boxEl.style.width = `${size}px`;
      boxEl.style.height = `${size}px`;
      size += 10;
      boxes.push(boxEl);
    };
    boxesEl.append(...boxes);
    btnDestroy.addEventListener('click', () => { boxesEl.innerHTML = '' });
  }
  return createBoxes(inputElValue);
};

btnCreate.addEventListener('click', onClickElemsCreation);


