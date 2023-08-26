document.addEventListener('DOMContentLoaded', function () {

    const numParticles = 50;
    const container = document.body;
    const count = document.getElementById("count");
    const clicker = document.getElementById("clicker");
    const reset = document.getElementById("reset");
    const bgchanger = document.getElementById("bgChanger");
    const title = document.getElementById("title");
    const hover = document.getElementById('hover-effect');
    const alertIn = document.getElementById('alert-input')
    const alertButton = document.getElementById('alert-submit');

    var bgFlag = 0;



    function increment() {
        if (count.textContent === " " ||  count.textContent === "" ){
            count.textContent = "1";
        }
        else{
        count.textContent = (parseInt(count.textContent) + 1).toString();
        }
    }  
    
    function cleaner() {
        count.textContent = " ";
    }
    
    function bgChangeFunction() {
        if (bgFlag === 0) {
            container.style.backgroundImage = "linear-gradient(to bottom, #FFF5EE, #FFFAFA)";
            bgchanger.style.color = "black";
            title.style.backgroundImage = "linear-gradient(45deg, #5c92af, #4f7a9e)";
            hover.style.backgroundColor  = "rgba(0, 0, 0, 0.118)";
            alertIn.style.backgroundColor = "#ebebeb";
            alertIn.style.color = "black";
            bgFlag = 1;
        } else {
            container.style.backgroundImage = "linear-gradient(to bottom, #000000, #111111)";
            bgchanger.style.color = "white";
            title.style.backgroundImage = "linear-gradient(45deg, #3498db, #abbdef)";
            hover.style.backgroundColor  = "rgba(255, 255, 255, 0.118)";
            alertIn.style.backgroundColor = "#000000";
            alertIn.style.color = "white";
            bgFlag = 0;
        }
    }
    
    bgchanger.addEventListener('click', bgChangeFunction);
    clicker.addEventListener('click', increment);
    reset.addEventListener('click', cleaner);

    document.addEventListener('mousemove', transformHover);

    function transformHover(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        hover.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }

    alertButton.addEventListener('click', alerter);

    function alerter() {
        const inputValue = alertIn.value;

        if(inputValue === ``){

        }
        else{
        alert(`${inputValue}`);
        }
    }

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
