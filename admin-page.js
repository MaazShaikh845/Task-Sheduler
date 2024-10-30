// function openSidebar() {
//     document.getElementById("sidebar").style.width = "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
// }

let hamburger = document.querySelector('.open-btn');
let closebtn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');



hamburger.addEventListener('click', openSidebar);
function openSidebar() {
    sidebar.style.width = '250px';
    closebtn.style.opacity = '1';
}

closebtn.addEventListener('click', closeSidebar);
function closeSidebar() {
    sidebar.style.width = '0';
    closebtn.style.opacity = '0';
}
