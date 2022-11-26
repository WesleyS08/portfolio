const themeBtn = document.querySelector('.tema-btn');

themeBtn.addEventListener('click', () => {
document.body.classList.toggle('dark-theme');

themeBtn.querySelector('span:first-child').classList.toggle('active');
})


