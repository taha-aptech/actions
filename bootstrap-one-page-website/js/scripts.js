// This file contains JavaScript for interactive features on the website, including form validation for the feedback form.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(function (error) {
            error.textContent = '';
        });

        // Name validation
        if (name.trim() === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            valid = false;
        }

        // Email validation
        if (email.trim() === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Message validation
        if (message.trim() === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            valid = false;
        }

        // If the form is valid, you can submit it or perform further actions
        if (valid) {
            // Here you can handle the form submission, e.g., send data to a server
            alert('Form submitted successfully!');
            form.reset(); // Reset the form after submission
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});