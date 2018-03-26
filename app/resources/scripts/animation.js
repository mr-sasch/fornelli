// Ширина
var windowHeight = document.documentElement.clientHeight;
var windowWidth = document.documentElement.clientWidth;
var activateAnimate = windowHeight/2;

var shirina45container = document.getElementById('shirina45container');
var shirina45round = document.getElementById('shirina45round');
var panelPeople = document.getElementById('panel-people');
var kachestva = document.getElementById('kachestva');
var kachestva2 = document.getElementById('kachestva2');
var kachestvaCntnt = document.getElementById('kachestva-cntnt');
var chto = document.getElementById('chto__items');
var pochemu = document.getElementById('pochemu-title-items');
var brand = document.getElementById('brand__info-item');
var best = document.getElementById('best__content');

document.onscroll = function() {
  var shirinaCoords = shirina45container.getBoundingClientRect();
  if(shirinaCoords.top < activateAnimate) {shirina45container.classList.remove("animate-it")};
  // if(shirinaCoords.top > activateAnimate) {shirina45container.classList.add("animate-it")};

  var shirina45roundCoords = shirina45round.getBoundingClientRect();
  if(shirina45roundCoords.top < activateAnimate) {shirina45round.classList.remove("animate-it")};
  if(shirina45roundCoords.top > activateAnimate) {shirina45round.classList.add("animate-it")};

  var panelPeopleCoords = panelPeople.getBoundingClientRect();
  if(panelPeopleCoords.top < activateAnimate) {panelPeople.classList.remove("animate-it")};
  if(panelPeopleCoords.top > activateAnimate) {panelPeople.classList.add("animate-it")};

  var kachestvaCoords = kachestva.getBoundingClientRect();
  if(kachestvaCoords.top < activateAnimate) {kachestva.classList.remove("animate-it")};
  if(kachestvaCoords.top > activateAnimate) {kachestva.classList.add("animate-it")};

  var kachestvaRow2Coords = kachestva2.getBoundingClientRect();
  if(kachestvaRow2Coords.top < activateAnimate) {kachestva2.classList.remove("animate-it")};
  if(kachestvaRow2Coords.top > activateAnimate) {kachestva2.classList.add("animate-it")};

  var kachestvaCntntCoords = kachestvaCntnt.getBoundingClientRect();
  if(kachestvaCntntCoords.top < activateAnimate) {kachestvaCntnt.classList.remove("animate-it")};
  if(kachestvaCntntCoords.top > activateAnimate) {kachestvaCntnt.classList.add("animate-it")};

  var chtoCoords = chto.getBoundingClientRect();
  if(chtoCoords.top < activateAnimate) {chto.classList.remove("animate-it")};
  if(chtoCoords.top > activateAnimate) {chto.classList.add("animate-it")};

  var pochemuCoords = pochemu.getBoundingClientRect();
  if(pochemuCoords.top < activateAnimate) {pochemu.classList.remove("animate-it")};
  if(pochemuCoords.top > activateAnimate) {pochemu.classList.add("animate-it")};

  var brandCoords = brand.getBoundingClientRect();
  if(brandCoords.top < activateAnimate) {brand.classList.remove("animate-it")};
  if(brandCoords.top > activateAnimate) {brand.classList.add("animate-it")};

  var bestCoords = best.getBoundingClientRect();
  if(bestCoords.top < activateAnimate) {best.classList.remove("animate-it")};
  if(bestCoords.top > activateAnimate) {best.classList.add("animate-it")};
}

/* Качества */
/* 1) */
var windowWidth = document.documentElement.clientWidth;
var kachestvaFrame = document.getElementsByClassName('kachestva__row1-item-cntnt-frame');
for(i=0;i<kachestvaFrame.length; i++) {
  kachestvaFrame[i].style.width = windowWidth + 'px';
}

/* 2) */
var kachestva2Frame = document.getElementsByClassName('kachestva__row1-item-cntnt-frame2');
var frameHide2 = document.getElementsByClassName('kachestva__row2-item-cntnt');

for(i=0;i<kachestva2Frame.length; i++) {
  kachestva2Frame[i].style.width = windowWidth + 'px';
  frameHide2[i].style.maxWidth = windowWidth + 'px';

}
document.body.onresize = function() {
  /* 1) */
  var windowWidth = document.documentElement.clientWidth;
  var kachestvaFrame = document.getElementsByClassName('kachestva__row1-item-cntnt-frame');
  for(i=0;i<kachestvaFrame.length; i++) {
    kachestvaFrame[i].style.width = windowWidth + 'px';
  }

  /* 2) */
  var windowWidth = document.documentElement.clientWidth;
  for(i=0;i<kachestva2Frame.length; i++) {
    kachestva2Frame[i].style.width = windowWidth + 'px';
    frameHide2[i].style.maxWidth = windowWidth + 'px';
  };

}
/* /Качества */

/* что */
var chtoText = document.getElementsByClassName('chto__item-text');
var chtoTextHeight = chtoText[0].clientHeight;
var chtoFrame = document.getElementsByClassName('chto__text-frame');
for(i=0; i<chtoFrame.length; i++) {
  chtoFrame[i].style.height = chtoTextHeight + 'px';
}
/* /что */

/* почему */
var pochemuText = document.getElementsByClassName('pochemu-title-item-txt');
var pochemuFrame = document.getElementsByClassName('pochemu-frame');
for(i=0; i<pochemuFrame.length; i++) {
  pochemuFrame[i].style.height = pochemuText[i].clientHeight + 'px';
}

/* /почему */

// /Ширина

/* Слайдер */
$(document).ready(function(){
  $('.partneri__slider-content').slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
     {
       breakpoint: 1100,
       settings: {
         slidesToShow: 4
       }
     },
     {
       breakpoint: 900,
       settings: {
         slidesToShow: 3
       }
     },
     {
       breakpoint: 650,
       settings: {
         slidesToShow: 1
       }
     }
   ]
  });
});
/* /Слайдер */

/* В нужном цвете - переключатель */
var panelElectro = document.getElementById('panel-electro');
var electroLabel = null;
var electroZ20 = document.getElementsByClassName('z20');
var panelElectroImg = document.getElementsByClassName('panel-electro-img');
panelElectro.onclick = function(event) {
  if(electroZ20) {
    for(i=0;i<electroZ20.length; i++) {
      electroZ20[i].classList.remove('z20');
    }
    electroLabel = null;
  }
  var target = event.target;
  console.log(target.tagName);
  if(target.tagName == 'IMG') {
    console.log(target);
    if(!electroLabel) {
      target.classList.add('z20');
      electroLabel = target;
    }
  }
}

/* /В нужном цвете - переключатель */
