const mobileMenu = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');
  const navLinks = navMain.querySelectorAll('.main-nav__link');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      document.body.style.overflow = 'hidden';
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      document.body.style.overflow = 'visible';
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', function () {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
      document.body.style.overflow = 'visible';
    });
  });
};

export {mobileMenu};
