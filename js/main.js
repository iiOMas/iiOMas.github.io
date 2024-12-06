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