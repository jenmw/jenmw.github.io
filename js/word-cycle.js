(function () {
    var words = ['Pragmatic', 'Generalist', 'Story-teller', 'AI-enabled', 'Collaborative', 'Evidence-led', 'Principled', 'Resilient', 'Cross-functional', 'Empathetic'];
    var i = 0;

    document.addEventListener('DOMContentLoaded', function () {
        var el = document.getElementById('word-cycle-text');
        if (!el) return;

        function cycle() {
            el.textContent = words[i];
            i = (i + 1) % words.length;

            el.classList.remove('is-animating');
            void el.offsetWidth;
            el.classList.add('is-animating');
        }

        cycle();
        setInterval(cycle, 2000);
    });
}());
