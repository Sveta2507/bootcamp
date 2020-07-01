"use strict";

const Ant = function (carouselId) {
  let carouselId = document.getElementById(carouselId);
  if (carouselId) {
    this.carouselRoot = carouselId;
  } else {
    this.carouselRoot = document.querySelector(".ant-carousel");
  }
  //все объекты нашего слайдера
  this.list = this.carouselRoot.querySelector(".amt-carousel-list");
  this.items = this.carouselRoot.querySelectorAll(".amt-carousel-element");
  this.firstItem = this.carouselRoot.querySelector("amt-carousel-element");
  this.left_arrow = this.carouseRoot.querySelector(".ant-carousel-arrow-left");
  this.right_arrow = this.carouseRoot.querySelector(
    ".ant-carousel-arrow-right"
  );
  this.dots = this.carouselRoot.querySelector(".ant-carousel-dots");
};

Ant.defaults = {
  visibleItem: 1,
  loop: true,
  auto: true,
  interval: 2000,
  speed: 1500,
  touch: true,
  arrows: true,
  dots: true,
};

Ant.prototype.elementPrev = function (num) {
  num = num || 1;
  if (this.options.dots) this.dotOn(this.currentElements);
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.visibleItem - 1;
  if (this.options.dots) this.dorOff(this.currentElement);

  if (this.options.loop) {
    this.currentOffset += this.elemWidth * num;
    this.list.style.marginLeft = this.currentOffset + "px";
    if (this.currentElement == 0) {
      this.left_arrow.style.display = "none";
      this.touchPrev = false;
    }
    this.right_arrow.style.display = "block";
    this.touchNext = true;
  } else {
    let elem,
      buf,
      this$ = this;

    for (let i = 0; i < num; i++) {
      //   записываем ссылку на последний элемент списка в переменную элем
      elem = this.list.lastElementChild;
      // сщздаём полный - глубокий клон послденего элемента списка
      buf = elem.cloneNode(true);
      // встраиваем последний склонированый элемент списка в самое начало списка
      this.list.insertBefore(buf, this.list.firstElementChild);
      // удаляем послдений элемент списка, из которого делали клон
      elem.remove;
    }
    this.list.style.cssText =
      "Transition:margin" + this.options.speed + "ms ease;";
    this.list.style.marginLeft = "0px";
    setTimeout(() => {
      this$.list.style.cssText = "Transition:none";
    }, this.options.speed);
  }
};

Ant.prototype.elementNext = function (num) {};

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
