document.addEventListener("DOMContentLoaded", function () {
    // Gestion du diaporama
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.classList.remove("active");
            // Gardez toutes les diapositives visibles pour la transition
            slide.style.display = "block";
            // Ajoutez une transition d'opacité pour toutes les diapositives
            slide.style.transition = "opacity 1s ease-in-out";
            // Cachez les diapositives non actives
            if (idx !== i) {
                slide.style.opacity = 0;
            }
        });
        // Affichez la diapositive active
        slides[i].style.opacity = 1;
        slides[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    showSlide(index);
    setInterval(nextSlide, 4000); // 4 secondes par diapo

    // Animation des sections au scroll
    const sections = document.querySelectorAll('.presentation-diaporama, .visite, .actualites');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {threshold: 0.2});

    sections.forEach(section => {
        observer.observe(section);
    });
});
