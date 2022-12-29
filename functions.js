const imgs = document.querySelectorAll('.image');
const modal = document.querySelector('.modal');
const activeImage = document.querySelector('#active-image');
const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('#close');

// Открыть отдельную фотографию
imgs.forEach(img => img.addEventListener('click', displayImage));

function displayImage(event) {
    activeImage.src = event.target.src;
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Закрыть отдельную фотографию на крестик
closeIcon.addEventListener('click', closeImage);

function closeImage() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Переход вперед 
const next = document.querySelector('#right').addEventListener('click', nextImage);

function nextImage() {
    for(var i = 0; i < imgs.length; i++) {
        if(activeImage.src === imgs[i].src) {
            var nextImageVar = imgs[i].nextElementSibling;
        }
    }
    if(nextImageVar === null) {
        activeImage.src = imgs[0].src;
    }
    else {
        activeImage.src = nextImageVar.src
    }
}

// Переход назад
const previous = document.querySelector('#left').addEventListener('click', previousImage);

function previousImage() {
    for(var i = 0; i < imgs.length; i++) {
        if(activeImage.src === imgs[i].src) {
            var nextImageVar = imgs[i].previousElementSibling;
        }
    }
    if(nextImageVar === null) {
        activeImage.src = imgs[imgs.length-1].src;
    }
    else {
        activeImage.src = nextImageVar.src
    }
}

// Слайд-шоу
const play = document.querySelector('#play').addEventListener('click', SlideShow);

var timer;
var speed = 1500;

function SlideShow() {
    for(var i = 0; i < imgs.length; i++) {
        if(activeImage.src === imgs[i].src) {
            var nextImageVar = imgs[i].nextElementSibling;
        }
    }
    if(nextImageVar === null) {
        activeImage.src = imgs[0].src;
    }
    else {
        activeImage.src = nextImageVar.src
    }
    clearInterval(timer);
    timer = setInterval("SlideShow()",speed);
}

const pause = document.querySelector('#pause').addEventListener('click', stopSlideShow);

function stopSlideShow(){
    clearInterval(timer);
}

// Увеличить фотографии
const plus = document.querySelector('#plus').addEventListener('click', zoomin);

var z = document.querySelectorAll('.image');

function zoomin() {
for(let i=0; i<z.length; i++) {
    var plusWidth = z[i].clientWidth;
    z[i].style.width = (plusWidth + 10) + "px";
}}

// Уменьшить фотографии
const minus = document.querySelector('#minus').addEventListener('click', zoomout);

var z = document.querySelectorAll('.image');

function zoomout() {
for(let i=0; i<z.length; i++) {
    var plusWidth = z[i].clientWidth;
    z[i].style.width = (plusWidth - 10) + "px";
}}

