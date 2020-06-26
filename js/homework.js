//task 1
let name; //объявление переменной
console.log(name);//undefined

name = 'Sveta'; //инициализация переменной
console.log(name); // Sveta

name = 'Svetlana'; // переприсвоение значения
console.log(name); // Svetlana

const lastName = "Denysenko";// объявляем и инициализируем одновременно
console.log(lastName);

//примитивы
// 1 - string ('',"",``)
let myName = 'Svetlana';
console.log(name); // Svetlana
console.log(typeof myName); //string

let count = '16';
console.log(count);
console.log(typeof count); //number

// 2 - number
let age = 16;
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

//task 2
const sally = {
    //properties - существительные и прилагательные
    name: "Sally",
    lastName: "Fisher",
    age: 22,
    hairColor: "Blue",
    married: false,
    children: false,
    speed: 4, //kmPerHour,
    score: 200,
    lives: 1,

//methods - глаголы

toShowName() {
    console.log(this.name);
    },
};

console.log(sally);
sally.name = "Sall"
console.log(sally);

sally.toShowName ();

sally.height = 183;
console.log(sally);

//task 4
// array
const arr = [];
console.log(arr);

const productslist = [
    "watermelons",
    { meat: "pork", anchovies: 15, bread: "black" },
    null,
];

console.log(productslist);

console.log(productslist[0]); // watermelons
console.log(productslist[1]); // { meat = "pork", anchovies: 15, bread: "black"}
console.log(productslist[2]); // null

productslist[0] = "blueberries";

console.log(productslist);

//task 3
//многомерные массивы
const newArr = [
    [1, 2], //index 0
    ["eins", "zwei"], // index 1
    [undefined, null], //index 2
];
console.log(newArr);

console.log(newArr[0][0]); //1
console.log(newArr[0][1]); //2

console.log(newArr[1][0]); //eins
console.log(newArr[1][1]); //zwei

console.log(newArr[2][0]); //undefined
console.log(newArr[2][1]); //null

// function
//function expression - функциональное выражение
const funcExpression = function(params) {
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