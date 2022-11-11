const mobileMenu = () => {
  const pageHeader = document.querySelector('.page-header');
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');
  const navLinks = navMain.querySelectorAll('.main-nav__link');
  const overlay = document.querySelector('.page-header__overlay');
  const closeMobileMenu = () => {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
  };

  navMain.classList.remove('main-nav--nojs');
  pageHeader.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      document.body.style.overflow = 'hidden';
      overlay.style.display = 'block';
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      document.body.style.overflow = 'visible';
      overlay.style.display = 'none';
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', closeMobileMenu);
  });

  overlay.addEventListener('click', closeMobileMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
};

export {mobileMenu};
