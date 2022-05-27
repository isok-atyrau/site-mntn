console.log(42)

const navBtn = document.querySelector('.nav-button')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body


function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active')
    navBtn.classList.toggle('nav-button-close')
    body.classList.toggle('no-scroll')
}
// Клик по кнопаке
navBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleMobileNav()   
})

// Клик по окну за пределами навигиции
window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

// Остановка клика внутри открытой мобильной навигации 
mobileNav.addEventListener('click', (e) => {
    e.stopPropagation()
})