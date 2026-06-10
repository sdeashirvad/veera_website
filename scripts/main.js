// Veera - Consolidated Main Scripts

document.addEventListener("DOMContentLoaded", function() {
    // --- EmailJS Initialization ---
    emailjs.init('wCd843ODekuYONUDw');

    // --- General Page Setup ---
    const sections = document.querySelectorAll("section");
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");

    // Fade-in animation for sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Mobile navigation toggle
    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            const isNavOpen = document.body.classList.toggle("nav-open");
            hamburger.setAttribute("aria-expanded", isNavOpen);
        });
    }

    // --- Early Access Modal Logic ---
    const modal = document.getElementById("early-access-modal");
    if (modal) {
        const modalTriggers = document.querySelectorAll(".cta-button, .cta-link");
        const closeModalButton = document.getElementById("close-modal");
        const earlyAccessForm = document.getElementById('early-access-form');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault();
                modal.style.display = "flex";
            });
        });

        closeModalButton.addEventListener("click", () => modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });

        if (earlyAccessForm) {
            earlyAccessForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const formStatus = document.getElementById('modal-form-status');
                const submitButton = this.querySelector('.submit-button');
                const emailInput = document.getElementById('modal-email');

                formStatus.textContent = 'Sending...';
                submitButton.disabled = true;

                emailjs.send('service_s0htkgn', 'template_lkg42cx', { email: emailInput.value })
                    .then(() => {
                        formStatus.textContent = 'Thank you for joining the waitlist!';
                        formStatus.style.color = 'var(--accent-color)';
                        submitButton.disabled = false;
                        earlyAccessForm.reset();
                    }, (error) => {
                        formStatus.textContent = 'An error occurred. Please try again.';
                        submitButton.disabled = false;
                        console.error('EmailJS Error:', error);
                    });
            });
        }
    }

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formStatus = document.getElementById('form-status');
            const submitButton = this.querySelector('.submit-button');

            formStatus.textContent = 'Sending...';
            submitButton.disabled = true;

            emailjs.sendForm('service_s0htkgn', 'template_lkg42cx', this)
                .then(() => {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.style.color = 'var(--accent-color)';
                    submitButton.disabled = false;
                    contactForm.reset();
                }, (error) => {
                    formStatus.textContent = 'Failed to send. Please try again.';
                    submitButton.disabled = false;
                    console.error('EmailJS Error:', error);
                });
        });
    }
});
