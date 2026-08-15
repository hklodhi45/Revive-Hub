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


let howItWorksBtn = document.querySelector('.how-it-works button');

isOpen = false;
howItWorksBtn.addEventListener('click', () => {
  const width = window.innerWidth;
  if(!isOpen){
    gsap.to(window, {
      duration: 1,
      ease: "power3.inOut"
    });

    if(992 < width && width <= 1200){
      gsap.to(window, {
        scrollTo: { y: 620 }
      });
    } else if(768 < width && width <= 992){
      gsap.to(window, {
        scrollTo: { y: 570 }
      });
    } else if(482 < width && width <= 768){
      gsap.to(window, {
        scrollTo: { y: 1050 }
      });
    }  else{
      gsap.to(window, {
        scrollTo: { y: 665 }
      });
    }
  }

  const container = document.querySelector('.how-it-works');
  container.classList.toggle('slide');

  const map = document.querySelector('.map');
  map.classList.toggle('open');
  
  isOpen = !isOpen;

});

let impactCount = document.querySelectorAll('.impact .impacts div h3');
let countObj = {value : 0};

gsap.to(countObj, {
  value: 100,
  duration: 2,
  onUpdate: function() {
    impactCount[0].innerHTML = `${Math.floor(countObj.value)*5}K+`;
    impactCount[1].innerHTML = `${(Math.floor(countObj.value) *3.035).toFixed(1)}`;
    impactCount[2].innerHTML = `${(Math.floor(countObj.value) *0.98).toFixed(0)}%`;
  }, 
  scrollTrigger:{
    trigger:".impact .impacts div",
    scroller:"body",
    start: "top 70%"
  }
});

let exploreBtn = document.querySelector('.explore-btn');

exploreBtn.addEventListener('mouseenter', ()=>{
  let h3 = document.querySelector('.explore-btn h3');
  h3.classList.toggle('open-exp');
})
