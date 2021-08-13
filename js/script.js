window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__block');
    header.classList.toggle('sticky', window.scrollY > 0);
});