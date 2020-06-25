// переменные let and const
let name; //объявление переменной
console.log(name);//undefined

name = 'Aleksa'; //инициализация переменной
console.log(name); // Aleksa

name = 'Aleksandra'; // переприсвоение значения
console.log(name); // Alrsandra

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
let age = 30
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
// array
// function
// symbol