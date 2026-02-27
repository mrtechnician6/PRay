function openLetter() {
    const doorway = document.getElementById('doorway');
    const mainContent = document.getElementById('mainContent');
    const audio = document.getElementById('loveSong');

    // 1. Play Music (Important: Start before animations)
    audio.play().catch(e => console.log("Audio waiting for interaction"));

    // 2. Animate the Doorway out
    doorway.style.transform = "translateY(-100%)";
    doorway.style.opacity = "0";

    // 3. Reveal Main Content
    setTimeout(() => {
        doorway.style.display = "none";
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = "1";
        document.body.classList.remove('no-scroll');
        document.body.style.background = "#2c0000"; // Soft transition
    }, 1000);

    createHearts();
}

function createHearts() {
    const container = document.body;
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random();
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        heart.style.transition = `all ${Math.random() * 3 + 2}s linear`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.style.top = '-10vh';
            heart.style.opacity = '0';
        }, 100);
    }
}

function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffd700', '#ff69b4']
    });
    
    setTimeout(() => {
        alert("You just made me the luckiest person in the world! ❤️");
    }, 500);
}
