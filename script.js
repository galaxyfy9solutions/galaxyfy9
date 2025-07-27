document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a, header nav a'); // Select all nav links

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for navigation links and close mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Get the target section's ID from the href
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight; // Get dynamic header height

            if (targetElement) {
                // Scroll to the target element smoothly, accounting for fixed header
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20, // Added extra padding for better visual
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open after clicking a link
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Form submission handling (demo purposes)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // Show loading state (optional)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.classList.add('opacity-70', 'cursor-not-allowed');

            // Simulate form submission success
            setTimeout(() => {
                formMessage.classList.remove('hidden', 'text-red-600');
                formMessage.classList.add('text-green-600');
                formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';

                // Reset button and clear form
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
                contactForm.reset();

                // Hide message after a short delay
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 3000); // Message disappears after 3 seconds
            }, 1500); // Simulate network request delay
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Particles.js Initialization ---
    function initializeParticles() {
        if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": { "value": "#ffffff" },
                    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                    "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
                    "size": { "value": 3, "random": true, "anim": { "enable": false } },
                    "line_linked": { "enable": false },
                    "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true },
                    "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 4, "duration": 2, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
                },
                "retina_detect": true
            });
            console.log("Particles.js initialized successfully.");
        } else {
            console.error("Particles.js not available for initialization or target element not found.");
        }
    }
    setTimeout(initializeParticles, 100);

    // --- Team Members Expansion Logic ---
    const viewMoreButton = document.getElementById('view-more-team-button');
    const moreTeamMembers = document.getElementById('more-team-members');

    if (viewMoreButton && moreTeamMembers) {
        viewMoreButton.addEventListener('click', () => {
            if (moreTeamMembers.classList.contains('expanded')) {
                // Collapse logic (optional, but good for toggle behavior)
                moreTeamMembers.classList.remove('expanded');
                viewMoreButton.innerHTML = 'View More Team Members <i class="fas fa-chevron-down ml-2"></i>';
            } else {
                // Expand logic
                moreTeamMembers.classList.add('expanded');
                viewMoreButton.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-2"></i>';
                // Optional: Scroll to the newly expanded content
                moreTeamMembers.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }
});