window.onscroll = function() {
  const navbar = document.querySelector('#Header')
  if (window.scrollY > 50) { // Altere "50" para a distância de scroll desejada
      navbar.classList.add('scrolled')
  } else {
      navbar.classList.remove('scrolled')
  }
};

document.getElementById('toggle-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark')
});

document.getElementById('toggle-mode').addEventListener('dblclick', function(event) {
  event.preventDefault();
});