const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('a');  // NodeList of all links

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    links.forEach(link => link.classList.add('scrolled'));
  } else {
    navbar.classList.remove('scrolled');
    links.forEach(link => link.classList.remove('scrolled'));
  }
});
