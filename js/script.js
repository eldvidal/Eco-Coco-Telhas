let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        // Adiciona um offset de 60px (ajuste conforme o tamanho do seu menu)
        window.scrollTo({
            top: target.offsetTop - 110, // Ajuste o valor 60 para o tamanho do seu menu fixo
            behavior: 'smooth' // Rolagem suave
        });
    });
});