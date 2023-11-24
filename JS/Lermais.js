// Select button
var button = document.getElementById('read_button');

// Click Event
button.addEventListener('click', function () {
    // Select card
    var card = document.querySelector('.card');
    var info = document.querySelector('.info');

    // Remove transition class to reset transition
    card.classList.remove('transition');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        button.textContent = 'Ler Mais';
        info.style.display = 'none'; // Oculta o texto ao recolher
        card.style.height = '150px'; // Ajuste conforme necessário
    } else {
        // Change button text if hasn't class active
        button.textContent = ' Resumo';
        info.style.display = 'block'; // Mostra o texto ao expandir
        card.style.height = '300px'
    }

    // Force reflow to apply styles before transition
    card.offsetHeight;

    // Add transition class to enable smooth transition
    card.classList.add('transition');

    // Remove height after transition completes
    card.addEventListener('transitionend', function () {
        if (!card.classList.contains('active')) {
            card.style.height = '300px';
        }
    }, { once: true });
});
