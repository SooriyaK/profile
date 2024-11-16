document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    if (card) {
        // Fade in the card
        setTimeout(() => card.classList.add('fade-in'), 200);

        // Sequentially fade in child elements
        const elementsToFade = [
            '.profile-pic',
            '.name',
            '.divider',
            '.description',
            '.links',
            '.end-divider',
        ];

        elementsToFade.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                setTimeout(() => {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }, 400 * (index + 1));
            }
        });
    }
});

