// переменные let and const
let name; //объявление переменной
console.log(name);//undefined

name = 'Aleksa'; //инициализация переменной
console.log(name); // Aleksa

name = 'Aleksandra'; // переприсвоение значения
console.log(name); // Aleksandra

// const lastName; - нельзя объявить без зачения
const lastName = "Hrevtsova";// объявляем и инициализируем одновременно
console.log(lastName);

//lastName = "ihefoehdoew"; - нельзя переназначить

// типы данных

//примитивы
// 1 - string ('',"",``)
let myName = 'Aleksandra';
console.log(name); //aleksandra
console.log(typeof myName); //string

let count = '30';
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
sasha.name = "Aleksandra"
console.log(sasha);

sasha.toShowName ();

sasha.height = 172;
console.log(sasha);

// array
const arr = [];
console.log(arr);

const productslist = [
    "apples",
    { meat: "chicken", eggs: 10, bread: "white"},
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

// symbol

