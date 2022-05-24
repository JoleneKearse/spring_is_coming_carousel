const slides = document.getElementsByClassName('carousel-item')
const nextBtn = document.getElementById('carousel-btn-next')
const prevBtn = document.getElementById('carousel-btn-prev')
const checkbox = document.getElementById('checkbox')
const toggle = document.getElementById('checkbox-label')
// carousel variables
let slidePosition = 0
const totalSlides = slides.length


nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPrevSlide)
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode')
    document.toggle.classList.toggle('dark-mode')
    document.img.classList.remove('depth')
    document.img.classList.add('depth-dark')
})

function hideAllSlides() {
    for (const slide of slides) {
        slides[slidePosition].classList.remove('carousel-item-visible')
        slides[slidePosition].classList.add('carousel-item-hidden')
    }
}

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible')
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add('carousel-item-visible')
}