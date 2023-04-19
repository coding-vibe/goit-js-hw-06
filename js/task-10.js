function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');

const elemsCreation = event => {
  const inputElValue = inputEl.value;
  if (event)
    return createBoxes(inputElValue);
};

const createBoxes = amount => {
  for (let i = 0; i <= amount; i += 1) {
    const divElems = document.createElement('div');
  }
      }

btnCreate.addEventListener('click', elemsCreation)


