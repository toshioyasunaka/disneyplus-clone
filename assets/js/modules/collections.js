const collection = document.querySelector('[data-carousel="collection"]');
const carouselList = document.querySelector('[data-carousel="list"]');
const carouselItems = document.querySelectorAll('[data-carousel="item"]');
const btnPrevious = document.querySelector('[data-carousel="btn-previous"]');
const btnNext = document.querySelector('[data-carousel="btn-next"]');

const state = {
    mouseDownPosition: 0,
    movement: 0,
    lastTranslatePosition: 0,
    currentSlidePosition: 0,
    currentItemIndex: 0,
    currentSlideIndex: 0,
}

const preventDefault = (e) => e.preventDefault();

const translateSlide = (position) => {
    state.lastTranslatePosition = position;
    carouselList.style.transform = `translateX(${position}px)`;
}

const getCenterPosition = (slideIndex) => {
    const item = carouselItems[state.currentItemIndex];
    const itemWidth = item.offsetWidth;
    const bodyWidth = document.body.clientWidth;
    const slideWidth = itemWidth * 5;
    const margin = (bodyWidth - slideWidth) / 2;
    return margin - (slideWidth * slideIndex);
}

const animateTransition = (active) => {
    if (active) {
        carouselList.style.transition = 'transform .3s';
    } else {
        carouselList.style.removeProperty('transition');
    }
}

const setVisibleSlide = (slideIndex) => {
    const centerPosition = getCenterPosition(slideIndex);
    state.currentSlideIndex = slideIndex;
    animateTransition(true);
    translateSlide(centerPosition);
}

const backwardSlide = () => {
    if (state.currentSlideIndex > 0) {
        setVisibleSlide(state.currentSlideIndex - 1)
    } else {
        setVisibleSlide(state.currentSlideIndex)
    }
}

const forwardSlide = () => {
    const lastItemIndex = carouselItems.length - 1;
    const lastSlideIndex = Math.floor(lastItemIndex / 5);
    if (state.currentSlideIndex < lastSlideIndex) {
        console.log(lastItemIndex)
        setVisibleSlide(state.currentSlideIndex + 1)
    } else {
        setVisibleSlide(state.currentSlideIndex)
    }
}

const onMouseDown = (e, index) => {
    const item = e.currentTarget;
    item.addEventListener('mousemove', onMouseMove)
    state.currentItemIndex = index;
    state.mouseDownPosition = e.clientX;
    state.currentSlidePosition = e.clientX - state.lastTranslatePosition;
    animateTransition(false);
}

const onMouseUp = (e) => {
    if(state.movement > 150) {
        backwardSlide();
    }
    else if (state.movement < -150) {
        forwardSlide();
    } 
    else {
        setVisibleSlide(state.currentSlideIndex);
    } 

    const item = e.currentTarget;
    item.removeEventListener('mousemove', onMouseMove)
}

const onMouseMove = (e) => {
    state.movement = e.clientX - state.mouseDownPosition;
    const position = e.clientX - state.currentSlidePosition;
    translateSlide(position); 
}

const onMouseLeave = (e) => {
    const item = e.currentTarget;
    item.removeEventListener('mousemove', onMouseMove)
}

const setListeners = () => {
    btnNext.addEventListener('click', forwardSlide)
    btnPrevious.addEventListener('click', backwardSlide)
    carouselItems.forEach((item, index) => {
        const link = item.querySelector('.movie-carousel__link');
        link.addEventListener('click', preventDefault);
        item.addEventListener('dragstart', preventDefault);
        item.addEventListener('mousedown', (e) => {
            onMouseDown(e, index)
        });
        item.addEventListener('mouseup', onMouseUp);
        item.addEventListener('mouseleave', onMouseLeave);
    })
}


const init = () => {
    setListeners();
    setVisibleSlide(0);
}

export default {
    init
}