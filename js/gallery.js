document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.gallery-card');
            const beforeImg = card.querySelector('.before-img');
            const afterImg = card.querySelector('.after-img');
            const buttons = card.querySelectorAll('.toggle-btn');
            const type = this.dataset.type;
            
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            if (type === 'before') {
                beforeImg.classList.remove('d-none');
                afterImg.classList.add('d-none');
            } else {
                beforeImg.classList.add('d-none');
                afterImg.classList.remove('d-none');
            }
        });
    });

    // Add click event to hero slideshow to advance slide on click
    const heroSlideshow = document.querySelector('#heroSlideshow');
    if (heroSlideshow) {
        // Explicitly create carousel instance
        const carousel = new bootstrap.Carousel(heroSlideshow);
        heroSlideshow.addEventListener('click', () => {
            carousel.pause();
            carousel.next();
            carousel.cycle();
        });
    }
});
