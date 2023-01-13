"use strict";

const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const operationContent = document.querySelectorAll(".operation__content");
const navLinks = document.querySelector(".nav-list");

//  TABBED COMPONENTS
tabContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
    // Guard close - prevent clicking in empty space
    if (!clicked) return;

    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");

    operationContent.forEach((c) =>
        c.classList.remove("operation__content--active")
    );

    document
        .querySelector(`.operation__content--${clicked.dataset.tab}`)
        .classList.add("operation__content--active");
});

// IMPLEMENTING SMOOTH SCROLLING
navLinks.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.getAttribute("href");
    document.querySelector(`${clicked}`).scrollIntoView({ behavior: "smooth" });
});
