document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myform').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            const btn = document.querySelector('.btn');
            btn.innerText = 'Sending...';

            const serviceID = 'service_zgq58qi'; // Update with your EmailJS service ID
            const templateID = 'template_hl632gn'; // Update with your EmailJS template ID

            const formData = {
                from_name: document.getElementById('name').value,
                subject: document.getElementById('subject').value,
                phone: document.getElementById('phone').value,
                email_id: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            emailjs.send(serviceID, templateID, formData)
                .then(() => {
                    btn.innerText = 'Submit';
                    document.getElementById('error_message').innerText = 'Message sent successfully!';
                    window.location.href = "Contact Form Confirm HTML and CSS.html";
                })
                .catch(error => {
                    btn.innerText = 'Submit';
                    document.getElementById('error_message').innerText = 'An error occurred while sending the message. Please try again later.';
                    console.error('Error:', error);
                });
        }
    });
});

// Initialize EmailJS
emailjs.init('XtsX58k1Pp56-m8ob'); // Update with your EmailJS user ID

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset error messages
    document.querySelectorAll('.error').forEach(error => {
        error.innerText = '';
    });

    if (name === '') {
        document.getElementById('error_name').innerText = 'Name is required';
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('error_name').innerText = 'Name must be at least 3 characters long';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('error_subject').innerText = 'Subject is required';
        isValid = false;
    } else if (subject.length >= 100) {
        document.getElementById('error_subject').innerText = 'Subject must be less than 100 characters';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('error_phone').innerText = 'Phone is required';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('error_phone').innerText = 'Phone must be 10 digits';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('error_email').innerText = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('error_email').innerText = 'Invalid email format';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('error_message_text').innerText = 'Message is required';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
