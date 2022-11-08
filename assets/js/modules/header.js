const headerModule = () => {
    const header = document.querySelector('[data-header]'); //select the first attribute data-header;
    const openNavSubmenu = document.querySelector('[data-open-navsubmenu]');
    const navSubmenu = document.querySelector('[data-navsubmenu]');
    const usermenu = document.querySelector('[data-usermenu]');
    const openUsermenu = document.querySelector('[data-open-usermenu]');
    
    function onWindowScroll() {
        if (window.scrollY > 20) {
            header.style.backgroundColor = '#0C0D14';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }
    
    function onTouchOpenNavSubmenu(e) {
        e.preventDefault();
        navSubmenu.classList.toggle('active');
    }
    
    function onTouchOpenUsermenu(e) {
        e.preventDefault();
        usermenu.classList.toggle('active');
    }
    
    function setListeners() {
        window.addEventListener('scroll', onWindowScroll)
        openNavSubmenu.addEventListener('touchstart', onTouchOpenNavSubmenu)
        openUsermenu.addEventListener('touchstart', onTouchOpenUsermenu)
    }
    
    function init() {
        setListeners();
    }
    
    return {
        init
    }
}

export default headerModule