const inputFields = document.querySelectorAll('#sign-up div input');
const formSubmitButton = document.querySelector('.form-action-button');

inputFields.forEach((inputField) => {
  inputField.addEventListener('input', () => {
    console.log(inputField.id);
  });
});

/*

function checkValidation(field) {
  if (field.validity.valueMissing) {
    errorMessage.textContent = `A value for ${field.name} is missing.`;
  }
}
*/

function checkNameField(field) {
  const fieldMinLength = 0;
  const fieldId = field.id;
  const errorMessage = document.querySelector(`#${fieldId} + .error`);

  if (field.value.length <= fieldMinLength) {
    errorMessage.classList.add('active');
    errorMessage.textContent = 'This is a required field.';
  } else {
    errorMessage.classList.remove('active');
    errorMessage.textContent = '';
  }
}

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');

firstName.addEventListener('input', () => {
  checkNameField(firstName);
});

lastName.addEventListener('input', () => {
  checkNameField(lastName);
});

function checkPassword(field) {
  const fieldPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const fieldId = field.id;
  const errorMessage = document.querySelector(`#${fieldId} + .error`);

  if (!(field.value.match(fieldPattern))) {
    errorMessage.classList.add('active');
    errorMessage.textContent = 'Your password must be 7-15 characters, contain at least one numeric digit, and a special character (!@#$%^&*).';
  } else {
    errorMessage.classList.remove('active');
    errorMessage.textContent = '';
  }
}

function checkPasswordConfirm(field, field2) {
  const fieldId = field2.id;
  const errorMessage = document.querySelector(`#${fieldId} + .error`);

  console.log();
  if (field.value !== field2.value) {
    errorMessage.classList.add('active');
    errorMessage.textContent = 'Your password must match.';
  } else {
    errorMessage.classList.remove('active');
    errorMessage.textContent = '';
  }
}

const password1 = document.getElementById('password');
const password2 = document.getElementById('password-confirm');

password1.addEventListener('blur', () => {
  checkPassword(password1);
});

password2.addEventListener('blur', () => {
  checkPasswordConfirm(password1, password2);
});

function checkEmail(field) {
  const fieldPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const fieldId = field.id;
  const errorMessage = document.querySelector(`#${fieldId} + .error`);

  if (!(field.value.match(fieldPattern))) {
    errorMessage.classList.add('active');
    errorMessage.textContent = 'Please enter a valid email.';
  } else {
    errorMessage.classList.remove('active');
    errorMessage.textContent = '';
  }
}

const email = document.getElementById('email');

email.addEventListener('blur', () => {
  checkEmail(email);
});

function checkPhoneNumber(field) {
  const fieldPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const fieldId = field.id;
  const errorMessage = document.querySelector(`#${fieldId} + .error`);

  if (!(field.value.match(fieldPattern))) {
    errorMessage.classList.add('active');
    errorMessage.textContent = 'Please enter a valid phone number.';
  } else {
    errorMessage.classList.remove('active');
    errorMessage.textContent = '';
  }
}

const phoneNumber = document.getElementById('phone-number');

phoneNumber.addEventListener('blur', () => {
  checkPhoneNumber(phoneNumber);
});

formSubmitButton.addEventListener('click', (e) => {
  e.preventDefault();
  checkNameField(firstName);
  checkNameField(lastName);
  checkEmail(email);
  checkPhoneNumber(phoneNumber);
  checkPassword(password1);
  checkPasswordConfirm(password1, password2);
});
