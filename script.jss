function startExperience() {
    const overlay = document.getElementById('overlay');
    const music = document.getElementById('bgMusic');

    // 1. Force the music to play immediately on click
    if (music) {
        music.play().catch(error => {
            console.log("Autoplay prevented, but we will still open the site.");
        });
    }

    // 2. Add a 'fade-out' class for a smoother world-class feel
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.8s ease-out';

    // 3. Physically remove the overlay so she can scroll
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 800);
}

// Fun logic for the "Proposal" page
const moveBtn = document.getElementById('moveBtn');

moveBtn.addEventListener('mouseover', () => {
    // Optional: make the button "jump" away if you want to be playful
    // For a serious proposal, keep both as "Yes"
});

function celebrate() {
    alert("The happiest day of my life! ❤️");
    // You can trigger confetti here or redirect to a 'Thank You' video
}
