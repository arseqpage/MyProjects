"use strict"
var sliderContainer = document.querySelector('.portfolio');
var sliderMain = sliderContainer.querySelector('.slider')
var sliderNav = sliderMain.querySelector('.slider__top');

var sliderItems = sliderContainer.querySelectorAll('.portfolio__item');

function createElement() {
    var createLine = document.createElement('div');
    createLine.classList.add('slider__line');
    sliderNav.appendChild(createLine);
}

for (var i = 0; i < sliderItems.length; i++) {
    createElement();
};

var sliderLine = document.querySelectorAll('.slider__line');


var slideIndex = 1;

function showSlides(n) {
    if (n > sliderItems.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = sliderItems.length
    }

    sliderItems.forEach( function (item) {
        item.style.display = 'none';
        
    })

    sliderLine.forEach(function (item) {
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
        item.classList.remove('slider__text');
    })

    var sliderName = sliderItems[slideIndex - 1].querySelector('.portfolio__item-title');
    
    sliderItems[slideIndex - 1].style.display = 'flex';
    sliderLine[slideIndex - 1].innerHTML = sliderName.innerHTML;
    sliderLine[slideIndex - 1].style.backgroundColor = 'transparent';
    sliderLine[slideIndex - 1].classList.add('slider__text')
    
}

 showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    $(".slider__arrow").on('click', function (e) {
        e.preventDefault();
        plusSlides(1);
        
    });
