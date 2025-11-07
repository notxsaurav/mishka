const pages = document.querySelectorAll('.page');
const startBtn = document.getElementById('startBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const envelope = document.getElementById('envelope');
const happyBirthday = document.getElementById('happyBirthday');
const music = document.getElementById('music');

let currentPage = 0;

// Sparkles
for(let i=0;i<40;i++){
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random()*100+'%';
  sparkle.style.top = Math.random()*100+'%';
  sparkle.style.animationDelay = Math.random()*6+'s';
  document.body.appendChild(sparkle);
}

// Show page
function showPage(index, animation){
  pages.forEach(p=>p.classList.remove('active','fade','slide','zoom'));
  const page = pages[index];
  page.classList.add('active', animation);

  const text = page.querySelector('.text');
  if(text) setTimeout(()=>text.classList.add('show'),200);

  if(page.querySelector('.envelope')) {
    page.querySelector('.envelope').classList.add('show');
  }

  currentPage = index;
}

startBtn.addEventListener('click',()=> showPage(1,'fade'));

nextBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nextIndex = currentPage + 1;
    if(nextIndex < pages.length){
      const anims = ['fade','slide','zoom','fade','slide','zoom','fade','slide','zoom','fade'];
      showPage(nextIndex, anims[currentPage] || 'fade');
    }
  });
});

// Envelope logic
if(envelope){
  envelope.addEventListener('click',()=>{
    showPage(5,'zoom');
    setTimeout(()=>happyBirthday.classList.add('show'),100);
    startConfetti();
    music.volume = 0.05;
    music.play();
    currentPage = 5;
  });
}

// Confetti
function startConfetti(){
  for(let i=0;i<100;i++){
    const conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = Math.random()*100+'vw';
    conf.style.setProperty('--hue', Math.floor(Math.random()*360));
    conf.style.animationDelay = Math.random()*3+'s';
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),4000);
  }
}
