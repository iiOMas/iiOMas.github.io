function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
    const menu = document.querySelector('.menu-icon');
    menu.style.display='none';
}
function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
    const menu = document.querySelector('.menu-icon');
    menu.style.display='flex';
}

// end menu side bar

// header bgcolor changing
document.addEventListener('scroll' , () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})