// - Дано натуральное число n. Выведите все числа от 1 до n.


// let n = 225;
//
// function naturalNum(num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(i);
//     }
// }
//
// naturalNum(n)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

// let z = 220;
// let y = 200;
//
// function nums(a, b) {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i)
//         }
//     }
// }
//
// nums(z, y);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = [9, 8, 0, 4];
// let num = 1;
//
// function zam(arr, i) {
//     let a = arr[i];
//     arr[i] = arr[i + 1]
//     arr[i + 1] = a
// }
//
// zam(foo, num)
// console.log(foo);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3,0,0,0,0];
//
// function zero(area) {
//     let a = [];
//     let b = [];
//     for (let i = 0; i < area.length; i++) {
//         if (area[i] === 0) {
//             a.push(area[i]);
//         } else if (area[i] !== 0) {
//             b.push(area[i]);
//         }
//     }
//     return [...b, ...a];
// }
//
// console.log(zero(arr));



// let arr = [0,0,0,1,0,6,0,3,0,0,0,0];
//
// function zero(...area) {
//     let a = [];
//     let b = [];
//     for (let i = 0; i < area.length; i++) {
//         if (area[i] === 0) {
//             a.push(area[i]);
//         } else if (area[i] !== 0) {
//             b.push(area[i]);
//         }
//     }
//     return [...b, ...a];
// }
//
// console.log(zero(0,0,0,1,4,5,0,6,4,0,0,7,4,3,2));