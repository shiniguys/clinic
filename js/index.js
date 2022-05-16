// lazysizes
document.addEventListener('lazyloaded', function (e) {
    var el = e.target;

    if (!el.dataset.bg) {
        el.parentNode.parentNode.classList.add('is-loaded');
    }
});

document.addEventListener('lazybeforeunveil', function (e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        if (bg == "css") {
            e.target.classList.add("is-load");
        } else {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    }
});


const body = document.body
const burgerbtn = document.querySelector('.navigation-toggle'),
    burgerlist = document.querySelector('.navigation-list'),
    header = document.querySelector('.header'),
    btnup = document.querySelector('.btn-up');


burgerbtn.addEventListener('click', () => {
    // burgerlist.classList.toggle('active');
    burgerbtn.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('hidden');
});


let startscroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    startscroll = window.pageYOffset;
    if (startscroll >= header.clientHeight) {
        header.style.backgroundColor = "white";
        btnup.classList.add('active');
    } else {
        header.style.removeProperty("background-color");
        btnup.classList.remove('active');
    }
});


btnup.addEventListener('click', () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});