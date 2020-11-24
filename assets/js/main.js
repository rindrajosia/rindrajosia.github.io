/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu');


/*===== REMOVE MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
    }else {
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);


/*===== CHANGE BACKGROUND HEADER =====*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  if(this.scrollY >= 200){
    header.classList.add('scroll-header');
  }else{
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*===== SHOW SCROLL TOP =====*/
const scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560){
    scrollTop.classList.add('show-scroll');
  }else{
    scrollTop.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollTop);

/*===== MIXITUP FILTER PORTFOLIO =====*/

const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});


/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item');

const activePortfolio = (position) => {
  if (linkPortfolio) {
    linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
    linkPortfolio[position].classList.add('active-portfolio');
  }
}

for (let i = 0; i < linkPortfolio.length; i += 1) {
    linkPortfolio[i].addEventListener('click', activePortfolio.bind(linkPortfolio[i], i));
}



/*===== GSAP ANIMATION =====*/

gsap.from('.home__data', {
  opacity: 0,
  duration: 2,
  delay: 0.8,
  y: 25
});

gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});

gsap.from('.nav__logo, .nav__toggle', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});

gsap.from('.nav__item', {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});

gsap.from('.home__social-icon', {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});
