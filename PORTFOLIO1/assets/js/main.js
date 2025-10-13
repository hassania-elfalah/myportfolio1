



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

document.addEventListener('DOMContentLoaded', function() {
   
    const sections = document.querySelectorAll('section[id]');
    
  
    function scrollActive() {
       
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute('id');

            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                
                document.querySelector(`.nav__list a[href*=${sectionId}]`).classList.add('active-link');
            } else {
                document.querySelector(`.nav__list a[href*=${sectionId}]`).classList.remove('active-link');
            }
        });
    }

    
    window.addEventListener('scroll', scrollActive);
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})
sr.reveal('.perfil, .contact__form')
sr.reveal('.info' , {origin: 'left' ,delay:800})
sr.reveal('.skills' , {origin: 'left' ,delay:900})
sr.reveal('.about' , {origin: 'right' ,delay:1000})
sr.reveal('.projects__card, .services__card, .experience__card' , {origin: 'right' ,delay:1000})

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav__list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('show');
    });
  }
});


