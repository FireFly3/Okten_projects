//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// let min = (a, b, c) => {
//     if (a < b && a < c) {
//         document.write(a);
//     } else if (b < a && b < c) {
//         document.write(b);
//     } else if (c < a && c < b) {
//         document.write(c);
//     }
// }
//
// min(5, 9, 3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let max = (a, b, c) => {
//     if (a > b && a > c) {
//         document.write(a);
//     } else if (b > a && b > c) {
//         document.write(b);
//     } else if (c > a && c > b) {
//         document.write(c);
//     }
// }
//
// max(5, 9, 3);


// - створити функцію яка повертає найбільше число з масиву

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
//
// let maxNum = (arrey) => {
//     let max = arrey[0];
//     for (const maxElement of arrey) {
//         if (maxElement > max) {
//             max = maxElement;
//         }
//     }
//     return max;
// }
//
// document.write(maxNum(arr));


// - створити функцію яка повертає найменьше число з масиву


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
//
// let minNum = (arrey) => {
//     let min = arrey[0];
//     for (const minElement of arrey) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// document.write(minNum(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
//
// let sum = (arrey) => {
//     let plus = 0;
//     for (let i = 0; i < arrey.length; i++) {
//         plus = plus + arrey[i];
//     }
//     return plus;
// }
//
// console.log(sum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
//
// let sum = (arrey) => {
//     let plus = 0;
//     for (let i = 0; i < arrey.length; i++) {
//         plus = plus + arrey[i];
//     }
//     return plus/arrey.length;
// }
//
// document.write(sum(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


let numMinMax = () => {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max)
    return min;
}

numMinMax(1, 2, 3, 4, 5, 6, 7, 8);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// let random = (arr, size) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(random([], 25));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// let random1 = (arr, size, limit) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
// console.log(random1([], 25, 50));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let rev = (arr) => {
//     let revers = [];
//     for (let i = 0, revi = arr.length; i < arr.length; i++, revi--) {
//         revers[revi] = arr[i];
//     }
//     return revers;
// }
//
// console.log(rev(arr1));


//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// let numbers = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
//
// }
// numbers(1,5,3);