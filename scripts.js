// menu

const menu = document.querySelector('.menu');

document.querySelector('.menu-open').addEventListener('click', () => {
    menu.style.padding = 'var(--space-lg) var(--space) var(--space) var(--space)';
    menu.style.height = '450px';
});

document.querySelector('.menu-close').addEventListener('click', () => {
    menu.style.padding = '0 var(--space)';
    menu.style.height = '0';
});


// back to top

const btt = document.querySelector('.top');
let x = 0;
let y = 100; 

function updateX() {
  if (window.innerWidth >= 1100) {
    // (width - container / 2) - button - spacing
    x = (window.innerWidth - 900) / 2 - 40 - 30;
  } else {
    x = 0;
  }
}

function updateTransform() {
  btt.style.transform = `translate(${-x}px, ${y}px)`;
}

// nothing works if you don't initialise
updateX();
updateTransform();

// remove this and it will only update on scroll
window.addEventListener('resize', () => {
  updateX();
  updateTransform();
});

// to trigger button when scrolling up
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const scrolledPast = currentScrollY > window.innerHeight;
  const scrollingUp = currentScrollY < lastScrollY;

  if (scrolledPast && scrollingUp) {
    y = 0;
  } else {
    y = 100;
  }

  updateTransform();
  btt.style.opacity = '1';

  lastScrollY = currentScrollY;
});

// make it actually go to the top
btt.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
