document.addEventListener('DOMContentLoaded', function () {

    const numParticles = 50;
    const container = document.body;
    const count = document.getElementById("count");
    const clicker = document.getElementById("clicker");
    const reset = document.getElementById("reset");
    const bgchanger = document.getElementById("bgChanger");
    
    var bgFlag = 0;

    function increment() {
        count.textContent = (parseInt(count.textContent) + 1).toString();
    }  
    
    function cleaner() {
        count.textContent = "0";
    }
    
    function bgChangeFunction() {
        if (bgFlag === 0) {
            container.style.backgroundImage = "linear-gradient(to bottom, #FFF5EE, #FFFAFA)";
            bgFlag = 1;
        } else {
            container.style.backgroundImage = "linear-gradient(to bottom, #000000, #111111)";
            bgFlag = 0;
        }
    }
    
    bgchanger.addEventListener('click', bgChangeFunction);

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
