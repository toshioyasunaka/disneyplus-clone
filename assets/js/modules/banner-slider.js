const sliderItems = document.querySelectorAll('[data-banner="item"]');
const slider = document.querySelector('[data-banner="slider"]');
const state = {
    mouseDownPosition: 0,
    lastTranslatePosition: 0,
    currentSliderPosition: 0,
}

function translateSlide(position) {
    state.lastTranslatePosition = position;
    slider.style.transform = `translateX(${position}px)`
}

function preventDefault(e) {
    e.preventDefault();
}

function onMouseDown(event) {
    const slide = event.currentTarget;
    slide.addEventListener('mousemove', onMouseMove);
    state.mouseDownPosition = event.clientX;
    state.currentSliderPosition = event.clientX - state.lastTranslatePosition;
}

function onMouseUp(event) {
    const slide = event.currentTarget;
    slide.removeEventListener('mousemove', onMouseMove);
}

function onMouseMove(event) {
    translateSlide(event.clientX - state.currentSliderPosition);
    console.log(event.clientX)
}

function onMouseLeave(event) {
    const slide = event.currentTarget;
    slide.removeEventListener('mousemove', onMouseMove)
    console.log('tirou o mouse de cima do elemento');
}

function setListeners() {
    sliderItems.forEach(function(slide, index) {
        const link = slide.querySelector('a.banner-slider__link');
        link.addEventListener('click', preventDefault);
        slide.addEventListener('dragstart', preventDefault);
        slide.addEventListener('mousedown', onMouseDown);
        slide.addEventListener('mouseup', onMouseUp);
        slide.addEventListener('mouseleave', onMouseLeave);
    })
}

function init() {
    setListeners();
}

export default {
    init
}