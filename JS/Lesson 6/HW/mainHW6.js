// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let str1 = ('hello world');
// let str2 = ('lorem ipsum');
// let str3 = ('javascript is cool');
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let str1 = ('hello world');
// let str2 = ('lorem ipsum');
// let str3 = ('javascript is cool');
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let str1 = ('HELLO WORLD');
// let str2 = ('LOREM IPSUM');
// let str3 = ('JAVASCRIPT IS COOL');
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let str = 'Каждый охотник желает знать';
// let arr = [];
// function newArr(stringToarray) {
//     return arr = stringToarray.split(' ');
// }
//
// console.log(newArr(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let str = 'Каждый охотник желает знать';
// let newStr = '';
// function delete_characters(str, length) {
//     return newStr = str.slice(0, length);
// }
// document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let str = "HTML JavaScript PHP";
// let newStr = '';
// function insert_dash(string) {
//     string.toUpperCase = function () {
//
//     }
//     return newStr = string.toUpperCase().replaceAll(' ', '-');
// }
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = "hello world";
//
// function uppFirst(string) {
//     let n = string.slice(1);
//     let newStr = string[0].toUpperCase();
//     return newStr + n;
// }
//
// console.log(uppFirst(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = "lorem ipsum hththt khkhkh khkhkh";
//
// function capitalize(str) {
//     let a = str.split(' ');
//
//     let newStr = [];
//
//     for (let i = 0; i < a.length; i++) {
//         const rest = a[i].slice(1);
//         const first = a[i][0].toUpperCase();
//         newStr.push(first + rest);
//     }
//     return newStr.join(' ')
// }
//
// console.log(capitalize(str));