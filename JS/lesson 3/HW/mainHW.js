// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// let arr2 = ['one', 'two', 'there', 'four', 'five'];
// console.log(arr2);
// let arr3 = [11, '22', 33, true, false];
// console.log(arr3);


//============================================================================================================


// let arr4 = [];
// arr4[0] = 1;
// arr4[1] = '1';
// arr4[2] = 156;
// arr4[3] = true;
// arr4[4] = false;
// arr4[5] = NaN;
// arr4[6] = 'OK';
// arr4[7] = 'Done';
// console.log(arr4);


//============================================================================================================


// for (let i = 0; i < 10; i++) {
//     document.write('<div>number</div>');
// }
//
// for (let y = 1; y <= 10; y++) {
//     document.write(`<div>student${y}</div>`);
// }
//
// let x = 0;
// while (x < 10) {
//     document.write('<h1>go</h1>');
//     x++;
// }
//
// let z = 1;
// while (z <= 10) {
//     document.write(`<h1>team${z}</h1>`);
//     z++;
// }


//============================================================================================================


// let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr5.length; i++) {
//     console.log(arr5[i]);
// }
//
// let arr6 = ['name', 'age', 'male', 'hobby', 'work', 'children', 'parents', 'dog', 'car', 'moto'];
// for (let i = 0; i < arr6.length; i++) {
//     console.log(arr6[i]);
// }
//
// let arr7 = [11, 22, '33', true, false, NaN, null, undefined, 0, '',];
// for (let i = 0; i < arr7.length; i++) {
//     console.log(arr7[i]);
// }

// let arr8 = [11, 22, '33', true, false, '44', 55, '66', 777, 'ten'];
// for (let i = 0; i < arr8.length; i++) {
//     if (typeof(arr8[i]) === 'boolean') {
//         console.log(arr8[i]);
//     }
// }
//
// for (let i = 0; i < arr8.length; i++) {
//     if (typeof(arr8[i]) === 'number') {
//         console.log(arr8[i]);
//     }
// }
//
// for (let i = 0; i < arr8.length; i++) {
//     if (typeof(arr8[i]) === 'string') {
//         console.log(arr8[i]);
//     }
// }


//============================================================================================================


// let arr9 = [];
// arr9[0] = 100;
// arr9[1] = "111";
// arr9[2] = 555;
// arr9[3] = true;
// arr9[4] = '#1';
// arr9[5] = false;
// arr9[6] = 'bro';
// arr9[7] = '2good4u';
// arr9[8] = 777;
// arr9[9] = 'arg';
// console.log(arr9);
//
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i);
// }
//
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i);
// }


// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// for (let i = 1; i <= 100; i++)
//     console.log(i);
//     document.write(i);
// }

// for (let i = 0; i <= 100; i ++) {
//     if (i % 2 === 0)
//     {
//         console.log(i);
//         document.write(i);
//     }
// }

// for (let i = 0; i <= 100; i ++) {
//     if (i % 2 === 1)
//     {
//         console.log(i);
//         document.write(i);
//     }
// }
