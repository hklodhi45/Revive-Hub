// nav dropdown
let navDropdown = document.querySelector('.navs ul i');
let otherNavs = document.querySelectorAll('.navs ul .other');

navDropdown.addEventListener('click', () => {
  otherNavs.forEach((E)=>{
    E.classList.toggle('open');
  });
})

// hero fade in-out animation
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


// how it works section responsiveness
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
        scrollTo: { y: 900 }
      });
    } else{
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

// our impact section count
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

// explrore btn animation
let exploreBtn = document.querySelector('.explore-btn');

exploreBtn.addEventListener('mouseenter', ()=>{
  let h3 = document.querySelector('.explore-btn h3');
  h3.classList.toggle('open-exp');
})


// partner with us section animation with GSAP
let moveUp = document.querySelectorAll('.gsap-move-up');

moveUp.forEach((element) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: element,
      scroller: "body",
      start: "top 80%"
    }
  });
});

// footer 
let footerLinks = document.querySelectorAll('footer li');

footerLinks.forEach(link => {
  let value = link.innerText;
  link.innerHTML = `<i class="fa-solid fa-angle-right"></i> ${value} `;
})

// footer animation
let content = document.querySelectorAll('footer .content ul');
let footer = document.querySelector('footer');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: content,
    scroller: "body",
    start: "top 85%",
    once: true
  }
});
  tl.from(content, {
    x : -75,
    opacity : 0,
    duration : 0.7,
    stagger : 0.3
  })
  
