let nav,ul= document.querySelector('.nav ul');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {

    nav,ul.classList.remove('active');
}