const navBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navBar = document.querySelector('.navbar');
navBtn.addEventListener('click', () => {
    navBar.classList.add('show-nav');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('show-nav');
})