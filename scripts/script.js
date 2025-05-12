const hamburgerOpening = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const hamburgerClosing = document.querySelector('.hamburger-closing');

hamburgerOpening.addEventListener('click', () => {
  sidebar.classList.toggle('open'); 
});

hamburgerClosing.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
