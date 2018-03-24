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
  if(shirinaCoords.top > activateAnimate) {shirina45container.classList.add("animate-it")};

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

  var brandCoords = brand.getBoundingClientRect();
  if(brandCoords.top < activateAnimate) {brand.classList.remove("animate-it")};
  if(brandCoords.top > activateAnimate) {brand.classList.add("animate-it")};

  var bestCoords = best.getBoundingClientRect();
  if(bestCoords.top < activateAnimate) {best.classList.remove("animate-it")};
  if(bestCoords.top > activateAnimate) {best.classList.add("animate-it")};
}

/* Качества */
var kachestvaFrame = document.getElementById('kachestva__row1-item-cntnt-frame');
kachestvaFrame.style.width = windowWidth + 'px';

document.body.onresize = function() {
  var windowWidth = document.documentElement.clientWidth;
  kachestvaFrame.style.width = windowWidth + 'px';
}
/* /Качества */

// /Ширина
