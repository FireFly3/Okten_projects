// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let cutString = (str, n) => {
//     let arr2 = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr2.push(str.slice(i, i+n))
//
//     }
//     return arr2;
// }
// console.log(cutString('qwertyhujikolp;[', 3));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
// з регулярками будете потім бавитись.
//


// function email(mail) {
//     let a = mail.toLowerCase();
//     if (!a.includes('@')) {
//         console.log('Not @')
//     }
//     let arrMail = a.split('@')
//     if (!arrMail[0]) {
//         console.log('Not not')
//     }
//     let arrPoint = a.split('.')
//     if (!arrPoint.length >= 2) {
//         console.log('NOT point')
//     }
//     return a;
// }
//
// console.log(email('someeMAIL@gmail.com'));


// - є масивlet

// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sortArr = (arr) => arr.sort((x, y) => x.modules.length - y.modules.length);
//
// console.log(sortArr(coursesArray));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// function count(str, stringsearch) {
//     let arrStr = str.split(`${stringsearch}`);
//     return arrStr.length - 1;
// }


// const count = (str, stringsearch) => str.split(`${stringsearch}`).length - 1;

// document.writeln(count("Астрономия это наука о небесных объектах", "о"))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// function cutString(str, n) {
//     let arrStr = str.split(' ');
//     let arrStrN = arrStr.slice(`${n} - 1`)
//     let string = arrStrN.join(' ')
//     return string;
// }

const cutString = (str, n) => str.split(' ').slice(`${n} - 1`).join(' ');


document.writeln(cutString('Сила тяжести приложена к центру', 5));