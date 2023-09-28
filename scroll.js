// AVANT RAFRAICHISSEMENT
localStorage.setItem('scrollPosition', window.scrollY);
// APRES RAFRAICHISSEMENT
const savedPosition = localStorage.getItem('scrollPosition');

if (savedPosition) {
    window.scrollTo(0, savedPosition);
}