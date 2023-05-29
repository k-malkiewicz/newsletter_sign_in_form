const emailInput = document.querySelector('[data-email]');
const submitBtn = document.querySelector('[data-submit]');
const newsletterEl = document.querySelector('[data-newsletter-el]');
const successEl = document.querySelector('[data-success-el]');

const closeSuccessMsg = () => {
    newsletterEl.classList.remove('hidden');
    successEl.classList.add('hidden');
}

const displaySuccessMsg = () => {
    const dismissBtn = document.querySelector('[data-dismiss]');
    const emailSpanEl = document.querySelector('[data-success-email]');

    newsletterEl.classList.add('hidden');
    successEl.classList.remove('hidden');
    emailSpanEl.textContent = emailInput.value;

    dismissBtn.addEventListener('click', closeSuccessMsg);
}

const validateEmail = () => {
    const errorEl = document.querySelector('[data-error]');
    errorEl.classList.remove('hidden');
    emailInput.classList.add('form_error');
    if (emailInput.value === '') {
        errorEl.textContent = "Empty email field";
    } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi.test(emailInput.value) || emailInput.value.toLowerCase() !== emailInput.value) {
        errorEl.textContent = "Valid email required";
    }
    else {
        displaySuccessMsg();
        emailInput.value = '';
        errorEl.textContent = '';
        emailInput.classList.remove('form_error');
        errorEl.classList.add('hidden');
    }
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    validateEmail();
})