// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }


// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let arr = [
//
//     new User(2, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(1, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(4, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(3, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(5, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(7, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(6, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(9, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(8, 'olia', 'buba', '1@a.ua', 123456789),
//     new User(10, 'olia', 'buba', '1@a.ua', 123456789)
// ];
// console.log(arr);

//


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arrFilter = arr.filter(function (value) {
//     if (value.id % 2 === 0) {
//         return value.id;
//     }
//
// });
//
// console.log(arrFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arrSort = arr.sort(function (a, b) {
//     return a.id - b.id;
// })
//
// console.log(arrSort);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// let client1 = new Client([1], ['sfdsdf'], ['ertert'], ['sdfsdf'], [123123], [56567567]);
// console.log(client1);

// створити пустий масив, наповнити його 10 об'єктами Client

let arr1 = [
    new Client(1, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'bread']),
    new Client(2, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple']),
    new Client(3, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat']),
    new Client(4, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'bread', 'potato']),
    new Client(5, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk']),
    new Client(6, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'bread', 'lito', 'boro', 'fan']),
    new Client(7, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'lito', 'boro', 'fan', 'bread', 'potato']),
    new Client(8, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'bread', 'apple', 'lito', 'boro', 'fan', 'bread', 'potato']),
    new Client(9, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'meat', 'apple', 'bread', 'lito', 'boro', 'fan']),
    new Client(10, 'kokia', 'boba', 'a@a.ua', 3805454544, ['milk', 'meat', 'apple', 'bread', 'lito', 'boro', 'fan', 'boro', 'fan', 'bread', 'potato'])
];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let arr1Sort = arr1.sort(function (a, b) {
    return a.order.length - b.order.length;
})

console.log(arr1Sort);