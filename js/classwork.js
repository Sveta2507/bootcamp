// переменные let and const
let name; //объявление переменной
console.log(name); //undefined

name = "Aleksa"; //инициализация переменной
console.log(name); // Aleksa

name = "Aleksandra"; // переприсвоение значения
console.log(name); // Aleksandra

// const lastName; - нельзя объявить без зачения
const lastName = "Hrevtsova"; // объявляем и инициализируем одновременно
console.log(lastName);

//lastName = "ihefoehdoew"; - нельзя переназначить

// типы данных

//примитивы
// 1 - string ('',"",``)
let myName = "Aleksandra";
console.log(name); //aleksandra
console.log(typeof myName); //string

let count = "30";
console.log(count);
console.log(typeof count); //number

// 2 - number
let age = 30;
console.log(age);
console.log(typeof age); //number

// 3 - boolean (true,false)
let isOnline = true;
console.log(isOnline); //true
console.log(typeof true); //boolean

isOnline = false;
console.log(isOnline); //false
console.log(typeof isOnline);

// 4 - undefined
let products;
console.log(products);
console.log(typeof products); //undefined

// 5 - null
let cart = null;
console.log(cart); //null
console.log(typeof cart); // object - специальная ошибка в js

// сложные
// object
const obj = {};
console.log(obj);

const sasha = {
  //properties - существительные и прилагательные
  name: "Sasha",
  lastName: "Hrevtsova",
  age: 30,
  hairColor: "Brown",
  married: false,
  children: true,
  //methods - глаголы

  toShowName() {
    console.log(this.name);
  },
};

console.log(sasha);
sasha.name = "Aleksandra";
console.log(sasha);

sasha.toShowName();

sasha.height = 172;
console.log(sasha);

// array
const arr = [];
console.log(arr);

const productslist = [
  "apples",
  { meat: "chicken", eggs: 10, bread: "white" },
  null,
];

console.log(productslist);

console.log(productslist[0]); // apples
console.log(productslist[1]); // { meat = "chicken", eggs: 10, bread: "white"}
console.log(productslist[2]); // null

productslist[0] = "oranges";

console.log(productslist);

//многомерные массивы
const newArr = [
  [1, 2, 3], //index 0
  ["alpha", "beta", "gama"], // index 1
  [undefined, null], //index 2
];
console.log(newArr);

console.log(newArr[0][0]); //1
console.log(newArr[0][1]); //2
console.log(newArr[0][2]); //3

console.log(newArr[1][0]); //alpha
console.log(newArr[1][1]); //beta
console.log(newArr[1][2]); //gama

console.log(newArr[2][0]); //undefined
console.log(newArr[2][1]); //null

// function
//function expression - функциональное выражение
const funcExpression = function (params) {
  //объявление функции
  console.log(params);
  console.log("Hello!");
  console.log("I'm a function Expression!");
};
// аргументы = значение параметров при вызове
funcExpression(1, 2, 3);

//arrow function

const arrowFunc = (a, b, c) => console.log(a + b - c);
arrowFunc(19, 45, 25);

//function declaration
function funcDeclaration(a, b, c) {
  console.log(a * b * c);
}
funcDeclaration(2, 4, 5);

// symbol
//операторы сравнения
console.log(5 > 7); //false
console.log(4 > 2); //true
console.log(3 >= 3); //true
console.log(3 >= 4); // false

//равенство
//строгое равенство
console.log(5 === 5); // false
//не строгое равенство - происходит логическое приведение типов
console.log(5 == "5"); // true
console.log(5 === "4"); // false

// строгое неравенство
console.log(5 !== "5"); //true

//нестрогое неравенство
console.log(5 != "5"); //false
console.log(5 !== "4"); //true

//! - знак отрицания, переворачивает значения
console.log(!true);
console.log(!false);

//преобразование типов к строке
let num = 12;
console.log(num);
console.log(typeof num); //number

num = num + "";
console.log(num);
console.log(typeof num); //string

let newNum = 23;
console.log(newNum);
console.log(typeof newNum); //number

newNum = String(newNum);
console.log(newNum);
console.log(typeof newNum); //string

// to number
let stringNum = "34";
console.log(stringNum);
console.log(typeof stringNum); //string

stringNum = +stringNum;
console.log(stringNum);
console.log(typeof stringNum); //number

let boolNum = true;
console.log(boolNum);
console.log(typeof boolNum); //boolean

boolNum = Number(boolNum);
console.log(boolNum); //1
console.log(typeof boolNum); //number

// to bool
let numValue = 1;
console.log(numValue);
console.log(typeof numValue);

numValue = Boolean(numValue);
console.log(numValue); //true
console.log(typeof numValue); //boolean

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean(1));
console.log(Boolean(" "));
console.log(Boolean(" "));
console.log(Boolean(` !`));
console.log(Boolean(Infinity));
console.log(Boolean(true));

//логические операторы
// && - логическое и возвращает последние тру значения, если они все тру
console.log(1 && true && 100); // true
// true true true
console.log(1 && true); // true
//true true

// возвращает первое ложное значение, если оно есть
console.log(0 && true); // 0
//false true
console.log(false && true);
// false true
console.log(1 && 0 && true && false); // 0
//true false true false
console.log(1 && false && true && 0); // false
//true false true false

//  || - логическое или
console.log(1 || true || 100); // 1
// true && true && true
console.log(1 || true); // 1
// true && true

console.log(0 || true);
//
console.log(false || true || 1);
// true false && true

console.log(1 || 0 || true || false); // 0
//true false true false
console.log(1 || false || true || 0); // false
//true false true false

//или последнее ложное значение, если все они ложные
console.log("" || 0 || undefined || false);
// false false || false || false || false
console.log(NaN || false || null || 0); //0
//false false false || false//
// ! - логическое не
console.log(!1); // false
console.log(!0); // true
console.log(!""); // true
console.log(!" "); // false
console.log(!NaN); // true
console.log(!undefined); // true
console.log(!null); // true

// двойное отрицание
console.log(!!1); //true
console.log(!!0); //false
console.log(!!""); // False
console.log(!!" "); // true
console.log(!NaN); // false
console.log(!undefined); // false
console.log(!null); // false
//falsy values js
//
//взаимодействие с пользователем
// let msg = confirm("Are you ready?")
// console.log(msg);//true -eсли пользователь нажал кнопку ok
// false если пользователь нажал кнопку отмена (Сancel)

// let greet = alert("Welcome!")
// сonsole.log (greet); // undefined

// let userData = prompt("Enter your name please");
// console.log(userData);
// если пользователь внес какие-то данные в поле ввода под сообщение /и нажал кнопку ок, то эти данные запишутся в переменную изeгData, 1 если пользователь, нажал кнопку отмена (Cancel), то запишется пиll

//ветвления
// if (1 < 0) {
//   console.log("Hello world");
// }

// //
// let message = "Добро пожаловать!";
// let enteredData = prompt("Введите число от 1 до 5");
// console.log("enteredData: ", enteredData);

// if (enteredData >= 1 && enteredData <= 5) {
//   console.log("Спасибо, вы ввели подходящее число");
// } else {
//   console.log("Вы ввели не подходящее значеие");
// }
// //
// let message = "Добро пожаловать!";
// let enteredData = prompt("Bведите число от 1 до 5");
// console.log("enteredData: ", enteredData);
// if (enteredData >= 1 && enteredData <= 5) {
//   alert(`Спасибо, вы ввели подходящее число: ${enteredData}`);
// } else {
//   alert(`Вы ввели не подходящее значение: ${еnteredData}`);
// }
//
//
//
//
// ЦИКЛЫ
for (let i = 0; і <= 10; i += 1) {
  console.log(`Итерация №${(i += 1)} - ${i}`);
}

// ехample
const results = [1, 11, 23, 45, 32, 78, 988, 45];
console.log(results);
console.log(`длин массива`, results.length);

for (let i = 0; і < results.length; i += 1) {
  if (results[i] >= 100) {
    console.log("трехзначный элемент", results[i]);
  } else if (results[i] > -10 && гesults[i] < 100) {
    console.log("двузначный элемент", results[i]);
  } else {
    console.log(`это число однозначное`);
  }
}

// DOM - Document Object Model

// доступ к DOM-элементам (тегам)
const projectBody = document.querySelector(`body`);
console.log(projectBody);

//получаем доступ к обїекту по значению атрибута class
const headerWrapper = document.querySelector(`.header_wrapper`);
console.log(headerWrapper);
console.dir(headerWrapper);

console.log(headerWrapper.title);
headerWrapper.title = "Hello";
console.log(headerWrapper.title);

const logo = document.querySelector(".logo");
console.log(logo);
console.log(logo[0].textContent);

logo.textContent = "Photo diary";
logo.style.fontSize = "36px";
//font-size
logo.classList.add("example");

//получаем доступ к массиву
