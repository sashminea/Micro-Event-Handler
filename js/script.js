document.addEventListener('DOMContentLoaded', function () {
    const numParticles = 50;
    const container = document.body;
    const count = document.getElementById("count");
    const clicker = document.getElementById("clicker");
    const reset = document.getElementById("reset");

    function increment() {

        count.textContent = (parseInt(count.textContent) + 1).toString();
    }  
    
    function cleaner() {

        count.textContent = "0";
    }
    
    clicker.addEventListener('click', increment);
    reset.addEventListener('click', cleaner);

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


