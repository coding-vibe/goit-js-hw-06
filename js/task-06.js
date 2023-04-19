const inputEl = document.querySelector('#validation-input');
const inputElDataLength = parseInt(inputEl.getAttribute('data-length'));

const inputElValidation = event => {
    const inputElValue = event.currentTarget.value;
    inputElValue.length === inputElDataLength ? inputEl.classList.add('valid') & inputEl.classList.remove('invalid'): inputEl.classList.add('invalid') & inputEl.classList.remove('valid');
};

inputEl.addEventListener('blur', inputElValidation);


