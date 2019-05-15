


//Fade out landing page on scroll//
const opacityAnchor = document.querySelector('.opacityAnchor').offsetTop;
function fadeOnScroll() {
    if(window.pageYOffset > 0) {
        const opacity = (window.pageYOffset / opacityAnchor);
        
        const beeBackground = document.querySelector('#top');
        beeBackground.style.background = "linear-gradient(rgba(255, 255, 255, " + (opacity / 2) + "), rgba(255, 255, 255, " + (opacity) + ")), url('./IMG/art50-min.jpg')", "background-position: center", "background-size: cover", "background-repeat: no-repeat";
    }
}




/////////////// STICK NAV ////////////////////////////

const nav = document.querySelector('nav');


function stickyNav() {
    const anch = document.querySelector('.anch');
    const anchPos = anch.offsetTop;
    const navPos = nav.offsetTop;
    if(window.pageYOffset >= anchPos) {
        nav.classList.add('stickyNav')
    } else {
        nav.classList.remove('stickyNav');
    }
}

////////////////////////////// MOBILE MENU OPEN CLOSE /////////////////////


let toggle = document.querySelector('.ham');
let navMenu = document.querySelector('ul');
let bars = document.querySelector('.open');
let close = document.querySelector('.close');




function toggleMenu() {
    navMenu.classList.toggle('showNav');
    
    bars.classList.toggle('hide');
    close.classList.toggle('show');
    

}

toggle.addEventListener('click', toggleMenu);
window.addEventListener('scroll', stickyNav);
window.addEventListener('scroll', fadeOnScroll);