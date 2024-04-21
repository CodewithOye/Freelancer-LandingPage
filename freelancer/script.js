let menuLinks = document.querySelector("#menu-links")
let navBar = document.querySelector("nav")

function toggleMenu(){
    menuLinks.classList.toggle("show-menu");

}

window.onscroll = function(){

    if(window.scrollY > 0){
        navBar.style.background = "#eefff9";
    }else {
        navBar.style.background =" transparent"
    }

}