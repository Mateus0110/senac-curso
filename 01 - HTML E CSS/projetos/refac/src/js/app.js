const header = document.querySelector('header')
const toggle = document.querySelectorAll('.toggle .fa-solid')

for (const icon of toggle) {
    icon.addEventListener('click', () => {
        header.classList.toggle('show')
    })
}

const app = {
    origin: 'left',
    duration: 2000,
    distance: '100%',
    scale: 0.4,
    mobile: true
}

ScrollReveal().reveal('.reveal-app-one', app)

app.origin = 'right'
ScrollReveal().reveal('.reveal-app-two', app)