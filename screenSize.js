 // Fonction pour mettre à jour l'affichage de la taille de la fenêtre
 function mettreAJourTailleFenetre() {
    const tailleFenetre = `Largeur: ${window.innerWidth}px, Hauteur: ${window.innerHeight}px`;
    document.getElementById("tailleFenetre").textContent = tailleFenetre;
}

// Appel initial pour afficher la taille de la fenêtre
mettreAJourTailleFenetre();

// Ajouter un gestionnaire d'événement pour mettre à jour la taille lors du redimensionnement
window.addEventListener("resize", mettreAJourTailleFenetre);