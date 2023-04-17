const inputEl = document.querySelector('#validation-input');
const inputElDataLength = parseInt(inputEl.getAttribute('data-length'));

const inputElValidation = event => {
    const inputElValue = event.currentTarget.value;
    if (inputElValue.length >= inputElDataLength)
        return inputEl.classList.add('valid');
    return inputEl.classList.add('invalid');
};

inputEl.addEventListener('blur', inputElValidation);


