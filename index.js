const mobile_nav_open = document.querySelector(".mobile-nav-open");
const mobile_nav_close = document.querySelector(".mobile-nav-close");
const headerElem = document .querySelector(".header");
mobile_nav_open.addEventListener("click", () => {
    headerElem.classList.add("active");
})
mobile_nav_close.addEventListener("click", () => {
    headerElem.classList.remove("active");
})