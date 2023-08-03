const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


