
const menu = document.getElementById('menu');
const items = document.getElementById('nav-links');
const bars = document.getElementById('bars');
const btn = document.getElementById('btn');
const contact = document.getElementById('contact');
const del = document.getElementById('del');
// items.style.display = 'none';

menu.addEventListener('click', () => {

    menu.classList.toggle('getIt');
    items.classList.toggle('open');
})

items.addEventListener("click", (e) => {
    items.classList.remove('open');
})



btn.addEventListener('click', () => {
    contact.classList.toggle('show')
})





