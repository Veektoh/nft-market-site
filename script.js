menuBtn = document.getElementById("menu-bar");
menu = document.querySelector("#menu-wrapper");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    menu.classList.toggle("hide-menu");
});