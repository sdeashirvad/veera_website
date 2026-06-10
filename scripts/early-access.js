document.addEventListener('DOMContentLoaded', function() {
    const earlyAccessForm = document.getElementById('early-access-form');
    if (earlyAccessForm) {
        earlyAccessForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formStatus = document.getElementById('modal-form-status');
            const submitButton = this.querySelector('.submit-button');
            const emailInput = document.getElementById('modal-email');

            formStatus.textContent = 'Sending...';
            formStatus.style.color = 'var(--secondary-color)';
            submitButton.disabled = true;

            const templateParams = {
                email: emailInput.value
            };

            // Using emailjs.send for more explicit control over parameters
            emailjs.send('service_s0htkgn', 'template_lkg42cx', templateParams)
                .then(function() {
                    formStatus.textContent = 'Thank you for joining the waitlist!';
                    formStatus.style.color = 'var(--accent-color)';
                    earlyAccessForm.reset();
                    submitButton.disabled = false;
                }, function(error) {
                    formStatus.textContent = 'An error occurred. Please try again.';
                    formStatus.style.color = 'red';
                    submitButton.disabled = false;
                    console.error('EmailJS Error:', error);
                });
        });
    }
});
