// Select button
var button = document.getElementById('vermais');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Ler Menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ler Mais';
});

