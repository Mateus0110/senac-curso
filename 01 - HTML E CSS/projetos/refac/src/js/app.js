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