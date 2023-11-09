

document.addEventListener("DOMContentLoaded", function() {

  let isValid = true;

  let today = new Date().toISOString().split('T')[0];
  document.getElementById("dob").setAttribute("max", today);
  function checkEmail() {
    function validateEmail(email) {
      let error = "";
      if (!/\S+@\S+\.\S+/.test(email)) {
        error += "Incorrectly entered mail<br/>";
      }
      if (/[^\x00-\x7F]+/.test(email)) {
        error += "Only Latin letters<br/>";
      }
      return error;
    }

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailValue = emailInput.value;

    const error = validateEmail(emailValue);
    emailError.innerHTML = error;
    isValid = error === "";
  }

  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', checkEmail);

  function checkPassword() {
    function validatePassword(password) {
      let error = "";

      if (password.length < 8) {
        error += "The password must be at least 8 characters long<br/>";
      }
      if (!/[a-zA-Z]/.test(password)) {
        error += "Password must contain at least one letter<br/>";
      }
      if (/[^a-zA-Z0-9]+/.test(password)) {
        error += "The password must contain only Latin letters and numbers<br/>";
      }
      return error;
    }

    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const passwordValue = passwordInput.value;

    const error = validatePassword(passwordValue);
    passwordError.innerHTML = error;
    isValid = error === "";
  }

  const passwordInput = document.getElementById('password');
  passwordInput.addEventListener('input', checkPassword);

  function checkLastName() {
    function validateLastName(lastName) {
      let error = "";

      if (lastName.length < 2) {
        error += "The last name must be at least two characters long<br/>";
      }
      if (lastName.length > 45) {
        error += "The last name must not exceed 45 characters<br/>";
      }
      if (/[^a-zA-Z]+/.test(lastName)) {
        error += "The last name must contain only Latin letters<br/>";
      }
      return error;
    }

    const lastNameInput = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    const lastNameValue = lastNameInput.value;

    const error = validateLastName(lastNameValue);
    lastNameError.innerHTML = error;
    isValid = error === "";
  }

  const lastNameInput = document.getElementById('last-name');
  lastNameInput.addEventListener('input', checkLastName);

  function checkFirstName() {
    function validateFirstName(firstName) {
      let error = "";

      if (firstName.length < 2) {
        error += "The name must be at least two characters<br/>";
      }
      if (firstName.length > 25) {
        error += "The name must be no more than 25 characters<br/>";
      }
      if (/[^a-zA-Z]+/.test(firstName)) {
        error += "The name must contain only Latin letters<br/>";
      }
      return error;
    }

    const firstNameInput = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    const firstNameValue = firstNameInput.value;

    const error = validateFirstName(firstNameValue);
    firstNameError.innerHTML = error;
    isValid = error === "";
  }

  const firstNameInput = document.getElementById('first-name');
  firstNameInput.addEventListener('input', checkFirstName);

  function checkDateOfBirth() {
    function validateDateOfBirth(dateOfBirth) {
      let error = "";
      const currentDate = new Date();
      const minDate = new Date(currentDate);
      minDate.setFullYear(currentDate.getFullYear() - 100);
      const maxDate = new Date(currentDate);
      maxDate.setFullYear(currentDate.getFullYear() - 18);

      const selectedDate = new Date(dateOfBirth);

      if (selectedDate > currentDate) {
        error += "The date of birth cannot be in the future<br/>";
      }
      if (selectedDate < minDate) {
        error += "You must be under 100 to register<br/>";
      }
      if (selectedDate > maxDate) {
        error += "You must be over 18 to register<br/>";
      }
      return error;
    }

    const dobInput = document.getElementById('dob');
    const dobError = document.getElementById('date-error');
    const dobValue = dobInput.value;

    const error = validateDateOfBirth(dobValue);
    dobError.innerHTML = error;
    isValid = error === "";
  }

  const dobInput = document.getElementById('dob');
  dobInput.addEventListener('input', checkDateOfBirth);

  function checkGender() {
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById('gender-error');

    if (!genderInput) {
      genderError.textContent = 'Please select your gender';
      isValid = false;
    } else {
      genderError.textContent = '';
      isValid = true;
    }
  }

  const genderInputs = document.querySelectorAll('input[name="gender"]');
  genderInputs.forEach(function(input) {
    input.addEventListener('change', checkGender);
  });

  function checkPhoneNumber() {
    const phoneNumberInput = document.getElementById('phone');
    const phoneNumberError = document.getElementById('phone-error');
    const phoneNumberValue = phoneNumberInput.value;

    const phoneNumberPattern = /^\+38\((0[1-9][0-9])\)\s\d{3}-\d{2}-\d{2}$/;

    if (phoneNumberPattern.test(phoneNumberValue)) {
      const operatorCode = phoneNumberPattern.exec(phoneNumberValue)[1];

      if (isValidOperatorCode(operatorCode)) {
        phoneNumberError.textContent = '';
      } else {
        phoneNumberError.textContent = 'The wrong code of the operator';
      }
    } else {
      phoneNumberError.textContent = 'Invalid phone number format';
    }
  }

  function isValidOperatorCode(operatorCode) {
    const validOperatorCodes = ['050', '063', '066', '067', '068', '096', '097', '098', '099'];

    return validOperatorCodes.includes(operatorCode);
  }
  $('#phone').on('input', function() {
    checkPhoneNumber();
  });

  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', function(event) {
    if (!isValid) {
      event.preventDefault();
    }
  });

});
