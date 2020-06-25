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
let age = 16
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