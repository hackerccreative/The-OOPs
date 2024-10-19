document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButton = document.getElementById("learn-more-btn");

    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function() {
            alert("More information about the SLIET Mentor Program will be available soon!");
        });
    }

    // Adding a subtle background movement effect on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        
        // Slightly move header based on scroll
        header.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
});
