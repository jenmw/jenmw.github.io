document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.phrase-highlight');
    if (!highlights.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-highlighted');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    highlights.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.35}s`;
        observer.observe(el);
    });
});
