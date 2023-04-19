const bodyEl = document.body;
const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

btnEl.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  textEl.textContent = currentColor;
});