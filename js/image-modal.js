document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('img-modal');
    const triggers = document.querySelectorAll('.img-expand');
    if (!modal || !triggers.length) return;

    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.img-modal-close');

    const openModal = (src, alt) => {
        modalImg.src = src;
        modalImg.alt = alt;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.hidden = true;
        modalImg.src = '';
        document.body.style.overflow = '';
    };

    triggers.forEach(trigger => {
        const img = trigger.querySelector('img');
        trigger.addEventListener('click', () => openModal(img.src, img.alt));
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(img.src, img.alt);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
});
