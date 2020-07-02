"use strict";

const Ant = function (carouselId) {
  let id = document.getElementById(carouselId);
  if (id) {
    this.carouselRoot = id;
  } else {
    this.carouselRoot = document.querySelector(".ant-carousel");
  }
  //все объекты нашего слайдера
  this.list = this.carouselRoot.querySelector(".amt-carousel-list");
  this.items = this.carouselRoot.querySelectorAll(".amt-carousel-element");
  this.firstItem = this.carouselRoot.querySelector("amt-carousel-element");
  this.left_arrow = this.carouselRoot.querySelector(".ant-carousel-arrow-left");
  this.right_arrow = this.carouselRoot.querySelector(
    ".ant-carousel-arrow-right"
  );
  this.dots = this.carouselRoot.querySelector(".ant-carousel-dots");

  this.options = Ant.defaults;
  Ant.initialize(this);
};

Ant.defaults = {
  // visibleItem: 1,
  ekemVisible: 1,
  loop: true,
  auto: true,
  interval: 3000,
  speed: 1500,
  touch: true,
  arrows: true,
  dots: true,
};

// Ant.prototype.elementPrev = function (num) {
//   num = num || 1;
//   if (this.options.dots) this.dotOn(this.currentElements);
//   this.currentElement -= num;
//   if (this.currentElement < 0) this.currentElement = this.visibleItem - 1;
//   if (this.options.dots) this.dotOff(this.currentElement);

//   if (this.options.loop) {
//     this.currentOffset += this.elemWidth * num;
//     this.list.style.marginLeft = this.currentOffset + "px";
//     if (this.currentElement == 0) {
//       this.left_arrow.style.display = "none";
//       this.touchPrev = false;
//     }
//     this.right_arrow.style.display = "block";
//     this.touchNext = true;
//   } else {
//     let elem,
//       buf,
//       this$ = this;

//     for (let i = 0; i < num; i++) {
//       //   записываем ссылку на последний элемент списка в переменную элем
//       elem = this.list.lastElementChild;
//       // сщздаём полный - глубокий клон послденего элемента списка
//       buf = elem.cloneNode(true);
//       // встраиваем последний склонированый элемент списка в самое начало списка
//       this.list.insertBefore(buf, this.list.firstElementChild);
//       // удаляем послдений элемент списка, из которого делали клон
//       elem.remove;
//     }
this.list.style.cssText = "Transition:margin" + this.options.speed + "ms ease;";
this.list.style.marginLeft = "0px";
setTimeout(() => {
  this$.list.style.cssText = "Transition:none";
}, this.options.speed);

Ant.prototype.elementNext = function (num) {
  num = num || 1;
};

if (this.options.dots) this.dotOn(this.currentElement);
this.currentElement += num;
if (this.currentElement >= this.dotsVisible) this.currentElement = 0;
if (this.options.dots) this.dotOff(this.currentElement);

if (!this.options.loop) {
  //сдвиг влево без цикла
  this.currentOffset -= this.elemWidth * num;
  this.crslList.style.marginLeft = this.currentOffset + "px";
  if (this.currentElement == this.dotsVisible - 1) {
    this.rightArrow.style.display = "none";
    this.touchNext = false;
  }
} else {
  //сдвиг влево с циклом
  let elm,
    buf,
    this$ = this;
  this.crslList.style.cssText =
    "transition:margin " + this.options.speed + "ms ease;";
  this.crslList.style.marginLeft = "-" + this.elemWidth * num + "px";
  setTimeout(function () {
    this$.crslList.style.cssText = "transition:none;";
    for (let i = 0; i < num; i++) {
      elm = this$.crslList.firstElementChild;
      buf = elm.cloneNode(true);
      this$.crslList.appendChild(buf);
      this$.crslList.removeChild(elm);
    }
    this$.crslList.style.marginLeft = "0px";
  }, this.options.speed);
}

Ant.prototype.dotOn = function (num) {
  this.indicatorDotsAll[num].style.cssText =
    "background-color:#BBB; cursor:pointer;";
};

Ant.prototype.dotOff = function (num) {
  this.indicatorDotsAll[num].style.cssText =
    "background-color:#556; cursor:default;";
};

Ant.initialize = function (that) {
  //constants
  that.elemCount = that.crslElements.length; //количество элементов
  that.dotsVisible = that.elemCount; //число видимых точек
  let elemStyle = window.getComputedStyle(that.crslElemFirst);
  that.elemWidth =
    that.crslElemFirst.offsetWidth + //ширина элемента (без margin)
    parseInt(elemStyle.marginLeft) +
    parseInt(elemStyle.marginRight);

  //variables
  that.currentElement = 0;
  that.currentOffset = 0;
  that.touchPrev = true;
  that.touchNext = true;
  let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
  let bgTime = getTime();

  //functions
  function getTime() {
    return new Date().getTime();
  }

  function setAutoScroll() {
    that.autoScroll = setInterval(function () {
      let fnTime = getTime();
      if (fnTime - bgTime + 20 > that.options.interval) {
        bgTime = fnTime;
        that.elemNext();
      }
    }, that.options.interval);
  }
};

//start initialization
if (that.elemCount <= that.options.elemVisible) {
  //отключить навигацию
  that.options.auto = false;
  that.options.touch = false;
  that.options.arrows = false;
  that.options.dots = false;
  that.leftArrow.style.display = "none";
  that.rightArrow.style.display = "none";
}

if (!that.options.loop) {
  //если нет цикла - уточнить количество точек
  that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
  that.leftArrow.style.display = "none"; //отключить левую стрелку
  that.touchPrev = false; //отключить прокрутку прикосновением вправо
  that.options.auto = false; //отключить автопркрутку
} else if (that.options.auto) {
  //инициализация автопрокруки
  setAutoScroll();
  //остановка прокрутки при наведении мыши на элемент
  that.crslList.addEventListener(
    "mouseenter",
    function () {
      clearInterval(that.autoScroll);
    },
    false
  );
  that.crslList.addEventListener("mouseleave", setAutoScroll, false);
}

if (that.options.touch) {
  //инициализация прокрутки прикосновением
  that.crslList.addEventListener(
    "touchstart",
    function (e) {
      xTouch = parseInt(e.touches[0].clientX);
      yTouch = parseInt(e.touches[0].clientY);
      stTime = getTime();
    },
    false
  );
  that.crslList.addEventListener(
    "touchmove",
    function (e) {
      if (!xTouch || !yTouch) return;
      xDiff = xTouch - parseInt(e.touches[0].clientX);
      yDiff = yTouch - parseInt(e.touches[0].clientY);
      mvTime = getTime();
      if (
        Math.abs(xDiff) > 15 &&
        Math.abs(xDiff) > Math.abs(yDiff) &&
        mvTime - stTime < 75
      ) {
        stTime = 0;
        if (that.touchNext && xDiff > 0) {
          bgTime = mvTime;
          that.elemNext();
        } else if (that.touchPrev && xDiff < 0) {
          bgTime = mvTime;
          that.elemPrev();
        }
      }
    },
    false
  );
}

if (that.options.arrows) {
  //инициализация стрелок
  if (!that.options.loop)
    that.crslList.style.cssText =
      "transition:margin " + that.options.speed + "ms ease;";
  that.leftArrow.addEventListener(
    "click",
    function () {
      let fnTime = getTime();
      if (fnTime - bgTime > that.options.speed) {
        bgTime = fnTime;
        that.elemPrev();
      }
    },
    false
  );
  that.rightArrow.addEventListener(
    "click",
    function () {
      let fnTime = getTime();
      if (fnTime - bgTime > that.options.speed) {
        bgTime = fnTime;
        that.elemNext();
      }
    },
    false
  );
} else {
  that.leftArrow.style.display = "none";
  that.rightArrow.style.display = "none";
}

if (that.options.dots) {
  //инициализация индикаторных точек
  let sum = "",
    diffNum;
  for (let i = 0; i < that.dotsVisible; i++) {
    sum += '<span class="ant-dot"></span>';
  }
  that.indicatorDots.innerHTML = sum;
  that.indicatorDotsAll = that.carouselRoot.querySelectorAll("span.ant-dot");
  //назначаем точкам обработчик события 'click'
  for (let n = 0; n < that.dotsVisible; n++) {
    that.indicatorDotsAll[n].addEventListener(
      "click",
      function () {
        diffNum = Math.abs(n - that.currentElement);
        if (n < that.currentElement) {
          bgTime = getTime();
          that.elemPrev(diffNum);
        } else if (n > that.currentElement) {
          bgTime = getTime();
          that.elemNext(diffNum);
        }
        //если n == that.currentElement ничего не делаем
      },
      false
    );
  }
  that.dotOff(0); //точка[0] выключена, остальные включены
  for (let i = 1; i < that.dotsVisible; i++) {
    that.dotOn(i);
  }
}

//1 секция
const s3 = document.querySelector(".ant-carousel");

//2 див
const hider = document.querySelector(".amt-carousel-hider");

//3 див с левой стрелкой
const arrow_left = document.querySelector(".ant-carousel-arrow-left");

//4 список ю эль
const list = document.querySelector(".amt-carousel-list");

//5 див с правой стрелкой
const arrow_right = document.querySelector(".ant-carousel-arrow-right");

//6 див с индикаторными точками
const dots = document.querySelector(".ant-carousel-dots");
