const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputElName = event => {
    if (!(event.currentTarget.value === ''))
        return outputEl.textContent = event.currentTarget.value;
    return outputEl.textContent = 'Anonymous';
};

inputEl.addEventListener('input', inputElName);
