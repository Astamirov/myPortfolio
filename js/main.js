const anchors = document.querySelectorAll('a[href*="#"]');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('menu-min');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('menu-min');
  }
});

menuList.addEventListener('click', () => {
  menuBtn.classList.remove('open');
  menuOpen = false;
  menu.classList.remove('menu-min');
});

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const topMenu = document.querySelector('#top-page');
  const aboutMenu = document.querySelector('#about-page');
  const skillsMenu = document.querySelector('#skills-page');
  const mySitesMenu = document.querySelector('#mySites-page');
  const contactsMenu = document.querySelector('#contacts-page');

  let scrollPos = window.scrollY;

  // adds 'highlights' class to my menu items
  if (window.innerWidth > 550 && scrollPos < 436) {
    topMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 550 && scrollPos < 825) {
    topMenu.classList.remove('highlight');
    aboutMenu.classList.add('highlight');
    skillsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 550 && scrollPos < 1560) {
    aboutMenu.classList.remove('highlight');
    skillsMenu.classList.add('highlight');
    mySitesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 550 && scrollPos < 2170) {
    skillsMenu.classList.remove('highlight');
    mySitesMenu.classList.add('highlight');
    contactsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 550) {
    mySitesMenu.classList.remove('highlight');
    contactsMenu.classList.add('highlight');
    return;
  }

  if ((elem && window.innerWidth < 550 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
