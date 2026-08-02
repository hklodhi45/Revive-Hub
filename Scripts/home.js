let hero = document.querySelector('.hero');
gsap.to((hero), {
  opacity:0,
  scrollTrigger:{
    trigger:".hero",
    scroller:"body",
    start:"top 15%",
    end:"top -5%",
    scrub: true,
  }
});


let howItWorksBtn = document.querySelector('.how-it-works button');

isOpen = false;
howItWorksBtn.addEventListener('click', () => {
  if(!isOpen){
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 665 },
      ease: "power3.inOut"
    });
  }

  const container = document.querySelector('.how-it-works');
  container.classList.toggle('slide');

  const map = document.querySelector('.map');
  map.classList.toggle('open');
  
  isOpen = !isOpen;

});
