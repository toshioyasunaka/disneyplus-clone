const header = document.querySelector('[data-header]'); //select the first attribute data-header;


function onWindowScroll() {
    if (window.scrollY > 20) {
        header.style.backgroundColor = '#0C0D14';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

function setListeners() {
    window.addEventListener('scroll', onWindowScroll)
}

function init() {
    setListeners();
}

export default {
    init
}