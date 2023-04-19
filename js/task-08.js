const form = document.querySelector('.login-form');

const handleFormSubmit = event => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Please, fill in all the fields!')
        return;
    };
    
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);

    event.currentTarget.reset();
};

form.addEventListener('submit', handleFormSubmit);