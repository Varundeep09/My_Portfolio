/**
 * Contact form JavaScript file for the portfolio website
 * Handles contact form validation and submission
 */

// DOM Elements
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const loadingDiv = document.querySelector('.loading');
const sentMessageDiv = document.querySelector('.sent-message');
const errorMessageDiv = document.querySelector('.error-message');

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize contact form validation and submission
  if (contactForm) {
    initializeContactForm();
  }

  // Initialize form label effects
  addContactFormEffects();
});

/**
 * Initialize contact form event listeners and validation
 */
function initializeContactForm() {
  contactForm.addEventListener('submit', handleFormSubmit);

  nameInput.addEventListener('blur', () => validateField(nameInput, 'Please enter your name'));
  emailInput.addEventListener('blur', () => validateEmail(emailInput));
  subjectInput.addEventListener('blur', () => validateField(subjectInput, 'Please enter a subject'));
  messageInput.addEventListener('blur', () => validateField(messageInput, 'Please enter your message'));
}

/**
 * Handle form submission
 * @param {Event} e - The form submission event
 */
function handleFormSubmit(e) {
  e.preventDefault();
  resetMessages();

  const isNameValid = validateField(nameInput, 'Please enter your name');
  const isEmailValid = validateEmail(emailInput);
  const isSubjectValid = validateField(subjectInput, 'Please enter a subject');
  const isMessageValid = validateField(messageInput, 'Please enter your message');

  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    submitForm();
  }
}

/**
 * Validate a form field
 */
function validateField(field, errorMessage) {
  if (field.value.trim() === '') {
    field.classList.add('is-invalid');
    field.nextElementSibling?.remove();

    const error = document.createElement('div');
    error.classList.add('invalid-feedback');
    error.textContent = errorMessage;
    field.parentNode.appendChild(error);
    return false;
  } else {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    field.nextElementSibling?.remove();
    return true;
  }
}

/**
 * Validate email field
 */
function validateEmail(field) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (field.value.trim() === '') {
    field.classList.add('is-invalid');
    field.nextElementSibling?.remove();

    const error = document.createElement('div');
    error.classList.add('invalid-feedback');
    error.textContent = 'Please enter your email';
    field.parentNode.appendChild(error);
    return false;
  } else if (!emailRegex.test(field.value.trim())) {
    field.classList.add('is-invalid');
    field.nextElementSibling?.remove();

    const error = document.createElement('div');
    error.classList.add('invalid-feedback');
    error.textContent = 'Please enter a valid email address';
    field.parentNode.appendChild(error);
    return false;
  } else {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    field.nextElementSibling?.remove();
    return true;
  }
}

/**
 * Reset form messages
 */
function resetMessages() {
  loadingDiv.style.display = 'none';
  sentMessageDiv.style.display = 'none';
  errorMessageDiv.style.display = 'none';
}

/**
 * Submit the contact form (simulated with success popup)
 */
function submitForm() {
  loadingDiv.style.display = 'block';

  setTimeout(() => {
    loadingDiv.style.display = 'none';
    sentMessageDiv.style.display = 'block';

    // ✅ SweetAlert2 popup for success
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for reaching out. I will get back to you soon.',
      confirmButtonColor: '#3085d6'
    });

    contactForm.reset();

    const formInputs = contactForm.querySelectorAll('.form-control');
    formInputs.forEach(input => input.classList.remove('is-valid'));

    setTimeout(() => {
      sentMessageDiv.style.display = 'none';
    }, 5000);
  }, 2000);
}

/**
 * Display error message
 */
function showError(message) {
  errorMessageDiv.textContent = message;
  errorMessageDiv.style.display = 'block';

  setTimeout(() => {
    errorMessageDiv.style.display = 'none';
  }, 5000);
}

/**
 * Add floating label effects
 */
function addContactFormEffects() {
  const formGroups = document.querySelectorAll('.form-group');

  formGroups.forEach(group => {
    const input = group.querySelector('.form-control');
    const label = group.querySelector('label');

    if (input && label) {
      input.addEventListener('focus', () => label.classList.add('active'));
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          label.classList.remove('active');
        }
      });

      if (input.value.trim() !== '') {
        label.classList.add('active');
      }
    }
  });
}
