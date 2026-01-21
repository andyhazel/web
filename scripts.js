// menu

const menu = document.querySelector('.menu');

document.querySelector('.menu-open').addEventListener('click', () => {
    menu.style.padding = 'var(--space-lg) var(--space) var(--space) var(--space)';
    menu.style.height = '450px';
});

function closeMenu() {
  menu.style.padding = '0 var(--space)';
  menu.style.height = '0';
}

document.querySelector('.menu-close').addEventListener('click', () => {
    closeMenu();
});

// close on outside touch
document.addEventListener('pointerdown', (e) => {
  if (!menu.contains(e.target)) {
    closeMenu();
  }
});


// back to top

const btt = document.querySelector('.top');
let x = 0;
let y = 100; 

if (btt) {

  // button position
  function updateX() {
    if (window.innerWidth >= 1080) {
      // (width - container / 2) - button - spacing
      x = (window.innerWidth - 960) / 2 - 40 - 30;
    } else {
      x = 10;
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

    // mobile bottom bug fix
    const atBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight - 2;

    if (scrolledPast && scrollingUp && !atBottom) {
      y = 0;
    } else {
      y = 100;
    }

    updateTransform();
    
    // wait for translate before making it visible
    setTimeout(() => {
      btt.style.opacity = '1';
    }, 500);

    lastScrollY = currentScrollY;
  });

  // make it actually go to the top
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

}

