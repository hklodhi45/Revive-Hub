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