"use strict"
var sliderContainer = document.querySelector('.portfolio');
var sliderMain = sliderContainer.querySelector('.slider')
var sliderNav = sliderMain.querySelector('.slider__top');
// var sliderBtn = sliderMain.querySelector('.slider__arrow');

var sliderItems = sliderContainer.querySelectorAll('.portfolio__item');

function createElement() {
    var createLine = document.createElement('div');
    createLine.classList.add('slider__line');
    sliderNav.appendChild(createLine);
    console.log(1);
}


for (var i = 0; i < sliderItems.length; i++) {
    createElement();
};


$(".slider__arrow").on('click', function (e) {
    e.preventDefault();
    console.log(12222);
});