document.addEventListener('DOMContentLoaded', function () {
    const numParticles = 50;
    const container = document.body;



    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust';

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        container.appendChild(particle);

    }
});


