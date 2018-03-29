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

/* В нужном цвете - переключатель - Панели */
  /* электро */
var panelElectroLabel = document.getElementById('panelElectroLabel');
var panelElectroLabelClass = document.getElementsByClassName('panelElectroLabel');
var panelElectroImgClass = document.getElementsByClassName('panelElectroImg');

panelElectroLabel.onclick = function(event) {
  var target = event.target;
  for(var i=0; i<panelElectroLabelClass.length; i++) {
    panelElectroLabelClass[i].classList.remove('z20');
    panelElectroImgClass[i].style.opacity = '0';
  }
  for(var i=0; i<panelElectroLabelClass.length; i++) {
    if(panelElectroLabelClass[i] == target) {
      panelElectroLabelClass[i].classList.add('z20');
      panelElectroImgClass[i].style.opacity = '1';
      return;
    }
  }
}
  /* /электро */
  /* мобильная электро */
  var panelElectroLabelMob = document.getElementById('panelElectroLabelMob');
  var panelElectroLabelMobClass = document.getElementsByClassName('panelElectroLabelMob');
  var panelElectroImgClass = document.getElementsByClassName('panelElectroImg');

  panelElectroLabelMob.onclick = function(event) {
    var target = event.target;
    for(var i=0; i<panelElectroLabelClass.length; i++) {
      panelElectroLabelMobClass[i].classList.remove('z20');
      panelElectroImgClass[i].style.opacity = '0';
    }
    for(var i=0; i<panelElectroLabelClass.length; i++) {
      if(panelElectroLabelMobClass[i] == target) {
        panelElectroLabelMobClass[i].classList.add('z20');
        panelElectroImgClass[i].style.opacity = '1';
        return;
      }
    }
  }
  /* /мобильная электро */

  /* газ */
var panelLabelGas = document.getElementById('panelLabelGas');
var panelLabelGasClass = document.getElementsByClassName('panelLabelGas');
var panelImgGas = document.getElementsByClassName('panelImgGas');

panelLabelGas.onclick = function(event) {
  var target = event.target;
  for(var i=0; i<panelLabelGasClass.length; i++) {
    panelLabelGasClass[i].classList.remove('z20');
    panelImgGas[i].style.opacity = '0';
  }
  for(var i=0; i<panelLabelGasClass.length; i++) {
    if(panelLabelGasClass[i] == target) {
      panelLabelGasClass[i].classList.add('z20');
      panelImgGas[i].style.opacity = '1';
    }
  }
}
  /* /газ */
  /* модильная газ */
  var panelGasLabelMob = document.getElementById('panelGasLabelMob');
  var panelGasLabelMobClass = document.getElementsByClassName('panelGasLabelMob');
  var panelImgGas = document.getElementsByClassName('panelImgGas');

  panelGasLabelMob.onclick = function(event) {
    var target = event.target;
    for(var i=0; i<panelLabelGasClass.length; i++) {
      panelGasLabelMobClass[i].classList.remove('z20');
      panelImgGas[i].style.opacity = '0';
    }
    for(var i=0; i<panelLabelGasClass.length; i++) {
      if(panelGasLabelMobClass[i] == target) {
        panelGasLabelMobClass[i].classList.add('z20');
        panelImgGas[i].style.opacity = '1';
      }
    }
  }
  /* /модильная газ */
/* /В нужном цвете - переключатель - Панели */

/* В нужном цвете - переключатель - Шкафы */
  /* Электро */
var shkafElectrolabels = document.getElementById('shkafElectrolabels');
var shkafElectrolabel = document.getElementsByClassName('shkafElectrolabels');
var shkafElectroImg = document.getElementsByClassName('shkaf-electro-img');
shkafElectrolabels.onclick = function(event) {
  var target = event.target;
  if(target.tagName !== 'IMG') return;
  for(var i=0; i<shkafElectrolabel.length; i++) {
    shkafElectrolabel[i].classList.remove('z20');
    shkafElectroImg[i].style.opacity = '0';
  }
  for(var i=0; i<shkafElectrolabel.length; i++) {
    if(shkafElectrolabel[i] == target) {
      shkafElectrolabel[i].classList.add('z20');
      shkafElectroImg[i].style.opacity = '1';
      return;
    }
  }
}
  /* /Электро */
  /* Электро - планшетная */
  var shkafElectrolabelsP = document.getElementById('shkafElectrolabels-p');
  var shkafElectrolabelP = document.getElementsByClassName('shkafElectrolabels-p');
  var shkafElectroImg = document.getElementsByClassName('shkaf-electro-img');
  shkafElectrolabelsP.onclick = function(event) {
    var target = event.target;
    if(target.tagName !== 'IMG') return;
    for(var i=0; i<shkafElectrolabelP.length; i++) {
      shkafElectrolabelP[i].classList.remove('z20');
      shkafElectroImg[i].style.opacity = '0';
    }
    for(var i=0; i<shkafElectrolabelP.length; i++) {
      if(shkafElectrolabelP[i] == target) {
        shkafElectrolabelP[i].classList.add('z20');
        shkafElectroImg[i].style.opacity = '1';
        return;
      }
    }
  }
  /* /Электро - планшетная */

  /* Газовая */
var shkafGasLabels = document.getElementById('shkafGasLabels');
var shkafGasLabel = document.getElementsByClassName('shkafGasLabel');
var shkafGasImg = document.getElementsByClassName('shkafGasImg');
shkafGasLabels.onclick = function(event) {
  var target = event.target;
  if(target.tagName !== 'IMG') return;
  for(var i=0; i<shkafGasLabel.length; i++) {
    shkafGasLabel[i].classList.remove('z20');
    shkafGasImg[i].style.opacity = '0';
  }
  for(var i=0; i<shkafGasLabel.length; i++) {
    if(shkafGasLabel[i] == target) {
      shkafGasLabel[i].classList.add('z20');
      shkafGasImg[i].style.opacity = '1';
      return;
    }
  }
}
  /* /Газовая */
  /* Газовая - планшетная */
  var shkafGasLabelsP = document.getElementById('shkafGasLabelsP');
  var shkafGasLabelP = document.getElementsByClassName('shkafGasLabelsP');
  var shkafGasImg = document.getElementsByClassName('shkafGasImg');
  shkafGasLabelsP.onclick = function(event) {
    var target = event.target;
    if(target.tagName !== 'IMG') return;
    for(var i=0; i<shkafGasLabelP.length; i++) {
      shkafGasLabelP[i].classList.remove('z20');
      shkafGasImg[i].style.opacity = '0';
    }
    for(var i=0; i<shkafGasLabelP.length; i++) {
      if(shkafGasLabelP[i] == target) {
        shkafGasLabelP[i].classList.add('z20');
        shkafGasImg[i].style.opacity = '1';
        return;
      }
    }
  }
  /* /Газовая - планшетная */
/* /В нужном цвете - переключатель - Шкафы */
