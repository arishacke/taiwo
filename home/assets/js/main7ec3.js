let scrollPos = window.scrollY
const navbar = document.querySelector('nav.navbar')

const addClassOnScroll = () => navbar.classList.add('active')
const removeClassOnScroll = () => navbar.classList.remove('active')

window.addEventListener('scroll', () => {
  scrollPos = window.scrollY

  scrollPos > 50 ? addClassOnScroll() : removeClassOnScroll()
})

const body = document.querySelector('body')
let navbarToggler = document.querySelector('.navbar-toggler')

const addClassOnToggle = () => {
  navbar.classList.add('collapsed')
  body.classList.add('hidden')
}
const removeClassOnToggle = () => {
  navbar.classList.remove('collapsed')
  body.classList.remove('hidden')
}

navbarToggler.addEventListener('click', () => {
  navbar.classList.contains('collapsed')
    ? removeClassOnToggle()
    : addClassOnToggle()
})
