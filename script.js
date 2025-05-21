// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    // Prevent default form submission
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation rules
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Email format check using regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Success: you can now submit to server or display success
    alert('Message sent successfully!');
    form.reset(); // Clear the form
  });
});