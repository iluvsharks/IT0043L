document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handleResize() {
    const width = window.innerWidth;
    if (width < 786) {
        document.querySelector('.pic1 img').style.width = '70vw';
    } else {
        document.querySelector('.pic1 img').style.width = '455px';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});
