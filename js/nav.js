(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const path = window.location.pathname;
        const isHome    = path === '/' || path === '/index.html';
        const isContact = /\/contact(\/|\/index\.html)?$/.test(path);

        const header = document.createElement('header');
        header.innerHTML =
            '<nav>' +
                '<a class="' + (isHome    ? 'this-page' : 'cool-link') + '" href="/">Home</a>' +
                '<a class="' + (isContact ? 'this-page' : 'cool-link') + '" href="/contact/">Contact</a>' +
            '</nav>';

        document.body.insertBefore(header, document.body.firstChild);
    });
}());
