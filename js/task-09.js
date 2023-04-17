const bodyEl = document.body;
const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const handleBtnClick = event => {
  if (event)
  {
    bodyEl.style.backgroundColor = getRandomHexColor();
    textEl.textContent = getRandomHexColor();
  }
}

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

btnEl.addEventListener('click', handleBtnClick);


