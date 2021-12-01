// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// function normal (str) {
//     return str.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll(`__`, ` `);
//
// }
//
// console.log(normal(n1));
// console.log(normal(n2));
// console.log(normal(n3));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function random(range, limit) {
//     let arr = [];
//     for (let i = 0; i < range; i++) {
//         let res = Math.round(Math.random() * limit);
//         arr.push(res);
//     }
//     return arr;
// }
//
// let someArr = (random(10, 100))
// console.log(someArr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let sort = (arr) => arr.sort((a1, b1) => a1 - b1)
//
// console.log(sort(someArr));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа


// let filtr = (arr) => arr.filter(value => value % 2 === 0)
//
// console.log(filtr(someArr))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let map = (arr) => arr.map(value => value.toString());
//
// console.log(map(someArr));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

// let nums = [11, 21, 3];
// let sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort(a, b)
//         return a - b
//     } else if (direction === 'descending') {
//         arr.sort(a, b)
//         return b - a
//     }
//     return arr
// }
//
// console.log(sortNums('ascending', nums));


//
// - є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// // -- відсортувати його за спаданням за monthDuration


// let sort1 = (arr) => arr.sort((x, y) => x.monthDuration - y.monthDuration);

// console.log(sort1(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let filter1 = (arr) => arr.filter(value => value.monthDuration > 5)
// console.log(filter1(coursesAndDurationArray));


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let arr2 = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr2.push(str.slice(i, i+n))
//
//     }
//   return arr2;
// }
// console.log(cutString('qwertyhujikolp;[', 3));
