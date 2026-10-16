import detailsData from '../Data/details.js';

let heroH1 = document.querySelector('.hero .text h1');
let heroH2 = document.querySelector('.hero .text h2');
let partnerText = document.querySelector('.partner-text h1');
const urlParams = new URLSearchParams(window.location.search);
let type = urlParams.get('m');
if(!type){
  type = 'Sell';
}

const backBtn = document.querySelector('.back-btn');

// navbar (step tracker) functionality
let currentTranslate = 0;
let crrStep = 0;
let steps = document.getElementsByClassName('steps');

function checkCrrStep(){
  crrStep = -1 * (currentTranslate / 100);
  showCrrStep();
}

showCrrStep(); // for initial step
function showCrrStep(){
  for(let i=0; i<5; i++){
    steps[i].classList.remove('crr-step');
  }
  steps[crrStep].classList.add('crr-step');

  showHero();
}

function showCheckedStep(){
  let compStep = 0;
  let label = document.getElementsByClassName('tick');
  compStep = (crrStep > compStep-1) ? crrStep-1 : compStep;
  for(let i=0; i<=compStep; i++){
    steps[i].checked = true;
    label[i].innerHTML = "&check;";
  }
}

// hero smooth fade in-out
let hero = document.querySelector('.hero');

gsap.to((hero), {
  opacity:0,
  scrollTrigger:{
    trigger:".hero",
    scroller:"body",
    start:"top 100px",
    end:"top -5%",
    scrub: true
  }
});

// hero text dynamics

function showHero(){
  heroH1.textContent = `${detailsData[crrStep].heroSubhead}`
  heroH2.innerHTML = `${detailsData[crrStep].heroHead} <b>${detailsData[crrStep].heroEx}</b>`
  partnerText.textContent = `${detailsData[crrStep].text}`

  if(crrStep == 0){
    heroH2.innerHTML = `${type} <b>?</b>`
  }
}

// heroText.innerHTML = `${type} <b>?</b>`;

// continue butten
let main = document.querySelector('main');
let deviceCards = document.querySelectorAll('.device .card');

deviceCards.forEach( card => {
  card.addEventListener('click', () => {
    currentTranslate -= 100;
    main.style.transform = `translateX(${currentTranslate}%)`;
    showBackBtn();
    checkCrrStep();
    showCheckedStep();
  })
})

let continueBtns = document.querySelectorAll('.continue-btn');
continueBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentTranslate -= 100;
    main.style.transform = `translateX(${currentTranslate}%)`;
    showBackBtn();
    checkCrrStep();
    showCheckedStep();
  })
})

// back button dynamincs
showBackBtn();

backBtn.addEventListener('click', () => {
  currentTranslate += 100;
  main.style.transform = `translateX(${currentTranslate}%)`;
  showBackBtn();
  checkCrrStep();
});

function showBackBtn(){
  backBtn.style.display = currentTranslate == 0 ? "none" : "flex";
}