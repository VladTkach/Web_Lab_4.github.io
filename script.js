
const hamburger = document.querySelector(".menu")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
})

document.querySelector(".nav__item").f