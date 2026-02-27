function startExperience() {
    // Hide overlay
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
    }, 1000);

    // Play Music (Browsers require interaction first)
    const music = document.getElementById('bgMusic');
    music.play();
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
