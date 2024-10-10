'use strict';

/**  * element toggle function   */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */
for(let i=0; i<navbarLinks.length; i++) {navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */
for(let i=0; i<navbarLinks.length; i++){
    navElemArr[i].addEventListener("click",function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

// scroll up
let span = document.querySelector(".up");

window.onscroll = function () {
this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });

};