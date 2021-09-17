'use strict';
const error = document.querySelectorAll('.error');

const emailInput = document.querySelector('.email');

const submitBtn = document.querySelector('.submit-btn');

/// Valid email function
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

/// Conditional function for checking valid email
function checkInput() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '' || !isEmail(emailValue)) {
    error.forEach((e) => (e.style.visibility = 'visible'));
    emailInput.classList.add('error-border');
  } else {
    error.forEach((e) => (e.style.visibility = 'hidden'));
    emailInput.classList.remove('error-border');
    emailInput.value = ' ';
  }
}

/// Conditional function attached to button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkInput();
});
