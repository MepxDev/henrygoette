document.addEventListener('DOMContentLoaded', function() {
    // Aktuelles Jahr im Footer anzeigen
    document.getElementById('jahr').textContent = new Date().getFullYear();
    
    // Smooth Scrolling für Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
