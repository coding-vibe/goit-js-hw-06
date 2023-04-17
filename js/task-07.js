const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeInputElFontSize = event => {
    if (event)
    { textEl.style.fontSize = `${event.currentTarget.value}px` };
};

inputEl.addEventListener('input', changeInputElFontSize);