// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.

// let favorites = [];
// for (const user of users) {
//
//     let htmlDivElement = document.createElement('div');
//     let stringUser = JSON.stringify(user);
//     htmlDivElement.innerText = stringUser;
//
//     let btn = document.createElement('button');
//     btn.innerText = 'додати до улюблених';
//
//     document.body.append(htmlDivElement, btn);
//     btn.onclick = function () {
//         favorites.push(stringUser)
//         let stringArr = JSON.stringify(favorites);
//         localStorage.setItem('Favorite', stringArr)
//     }
// }


// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


let favorites = [];
for (const user of users) {

    let htmlDivElement = document.createElement('div');
    let stringUser = JSON.stringify(user);
    htmlDivElement.innerText = stringUser;

    let btn = document.createElement('button');
    btn.innerText = 'додати до улюблених';

    document.body.append(htmlDivElement, btn);
    btn.onclick = function () {
        favorites.push(stringUser)
        let stringArr = JSON.stringify(favorites);
        localStorage.setItem('Favorite', stringArr)
    }
}