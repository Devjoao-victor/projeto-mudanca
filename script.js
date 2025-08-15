
function start() {
    const formu = document.getElementById('form')
    const start = document.getElementById('start')
    const bclose = document.getElementById('bclose')
    const colors = document.getElementById('colors')
    const particula = document.getElementsByClassName('particle')

    formu.style.display = 'flex'
    start.style.display = 'none'
    formu.style.flexDirection = 'column'
    bclose.style.borderStyle = 'none'
    bclose.style.background = 'flex'
    bclose.style.alignSelf = 'left'

    formu.classList.remove('animate-out');
    formu.style.display = 'flex';    // precisa estar na tela para animar
    void formu.offsetWidth;          // força reflow para reiniciar a animação
    formu.classList.add('animate-in');
    

    start.style.display = 'none';
    bclose.style.borderStyle = 'none';
    bclose.style.background = 'transparent'; // "flex" não é cor
    bclose.style.alignSelf = 'flex-start';   // "left" não é válido em flex
  

}

function shut() {
    const formu = document.getElementById('form')
    const start = document.getElementById('start')

    formu.classList.remove('animate-in');
    formu.classList.add('animate-out');

    formu.style.display = 'none'
    start.style.display = 'block'
    formu.style.transition = '0.5s'
    start.style.transition =  '0.5s'

    formu.addEventListener('animationend', (e) => {
        if (e.animationName !== 'popOut') return;
        formu.style.display = 'none';
        formu.classList.remove('animate-out');
        startB.style.display = 'block';
      }, { once: true });
    }
    
let main = document.getElementById('mains');
function createParticle(x,y) {
    let particle = document.createElement('div');
    let cores = document.getElementById('cor').value;
    particle.classList.add('particle');

    particle.style.boxShadow = `inset 0 0 2px #121212, 0 0 5px ${cores}, 0 0 10px ${cores}`

    //
    let rect = main.getBoundingClientRect();
    particle.style.left = `${x - rect.left}px`;
    particle.style.top = `${y - rect.top}px`;

    particle.style.left = `${x}px`
    particle.style.top = `${y}px`

    let moveX = (Math.random() - 0.5) * 400;
    let moveY = (Math.random() - 0.5) * 400;

    particle.style.setProperty('--move-x', `${moveX}px`)
    particle.style.setProperty('--move-y', `${moveY}px`)

    let size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    let duration = Math.random() * 3 + 2;
    particle.style.animationDuration = `${duration}s`;
    main.appendChild(particle);
    setTimeout(()=> particle.remove(), duration * 1000)
    }
    document.addEventListener('mousemove' , (e) => {
        createParticle(e.clientX, e.clientY);
    })

    main.addEventListener('mousemove', (e) => {
        createParticle(e.clientX, e.clientY);
    });