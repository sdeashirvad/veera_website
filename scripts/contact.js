document.addEventListener('DOMContentLoaded', function() {
    (function(){
        emailjs.init('wCd843ODekuYONUDw');
    })();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formStatus = document.getElementById('form-status');
            const submitButton = this.querySelector('.submit-button');

            formStatus.textContent = 'Sending...';
            formStatus.style.color = 'var(--secondary-color)';
            submitButton.disabled = true;

            emailjs.sendForm('service_s0htkgn', 'template_thabhn6', this)
                .then(function() {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.style.color = 'var(--accent-color)';
                    contactForm.reset();
                    submitButton.disabled = false;
                }, function(error) {
                    formStatus.textContent = 'Failed to send. Please try again.';
                    formStatus.style.color = 'red';
                    submitButton.disabled = false;
                    console.error('EmailJS Error:', error);
                });
        });
    }
});
