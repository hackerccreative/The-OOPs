document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButton = document.getElementById("learn-more-btn");

    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function() {
            alert("More information about the SLIET Mentor Program will be available soon!");
        });
    }

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        
        header.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
});
