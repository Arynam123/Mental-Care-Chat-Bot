// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Step hover effect
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.backgroundColor = '#e0e0e0';
        });
        step.addEventListener('mouseleave', () => {
            step.style.backgroundColor = '#fff';
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    setInterval(() => {
        showTestimonial(currentIndex);
        currentIndex = (currentIndex + 1) % testimonials.length;
    }, 3000); // Change testimonial every 3 seconds
});
