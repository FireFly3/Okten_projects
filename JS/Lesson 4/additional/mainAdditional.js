// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.


// function ad() {
//     if (arguments.length === 1) {
//         console.log(arguments[0])
//     } else if (arguments.length === 2) {
//         console.log(arguments[0] + arguments[1]);
//     }
// }
//
// ad('15', 15, 3);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//
// function plusI(firstArr, secondArr) {
//     let sumArr = [];
//     for (let i = 0; i < firstArr.length; i++) {
//         sumArr.push(firstArr[i] + secondArr[i]);
//     }
//     return sumArr;
// }
//
// let a = plusI(arrOne, arrTwo);
// console.log(a)


// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

