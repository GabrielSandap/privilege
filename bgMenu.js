const openNav = document.getElementById("bgMenu");
const closeNav = document.getElementById("closeNav");

// Sélection de l'élément avec la classe "nav"
const nav = document.getElementById('navigationMenu');
// Sélection de tous les boutons avec la classe "navBtn"
const navBtns = document.querySelectorAll(".navBtn");


openNav.addEventListener('click', () => {
  console.log('click');
    nav.classList.toggle('active');
});

closeNav.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Check de chaque bouton et ajout d'un gestionnaire d'événement

navBtns.forEach(function(navBtn) {
  navBtn.addEventListener("click", function() {
    // Supprimez la classe "showNav" de l'élément avec la classe "nav"
    nav.classList.toggle("active");
  });
});

