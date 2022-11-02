const menu = document.querySelector('.menu');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    nav.classList.toggle('navigation-active');
    if (nav.className == 'navigation navigation-active') {
        menu.className = 'fa-solid fa-xmark'
    } else {
        menu.className = 'fa-solid fa-bars-staggered menu'
    }
})
//slider
const balls = document.querySelectorAll('.slider__controls-item');
const sliderContainer = document.querySelector('.slider__container');
balls.forEach(e => {
    e.addEventListener('click', () => {
        balls.forEach(element => {
            element.classList.remove('slider__controls-item-active')
        })
        slider(e)
    })
})

function slider(value) {
    const data = value.getAttribute('data-value');
    value.classList.add('slider__controls-item-active')
    sliderContainer.classList.add('slider__container-active')
    sliderContainer.style.transform = `translateX(-${data}00%)`;
    setTimeout(() => {
        sliderContainer.classList.remove('slider__container-active')
    }, 500);
}
