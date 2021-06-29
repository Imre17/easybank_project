const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.header__menu a')
const fadeMenu = document.querySelector('.header__menu')

btnHamburger.addEventListener('click', fadeInOut)
btnHamburger.addEventListener('click', () => {

    fadeElems.forEach(elems => {
        elems.classList.toggle('has-fade')
        elems.style.transition = 'all 0.5s ease'
        fadeMenu.classList.toggle('fade-out')

    })
})


function fadeInOut() {
    header.classList.toggle('open')
    if (header.classList.contains('open')) {
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
    } else {
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    }
}