// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
function Card(name, username, email, street, suite, city, zipcode, lat, lng) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
            lat: lat,
            lng: lng
        }
    }
}

let card1 = new Card('kolia', 'abrbal', 'a@a.ua', 'dubrova', 'Apt.55', 'Kyiv',
    '03121', '-11525', '22525');
console.log(card1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tags(titleOfTag, action, attrs1Name, attrs1Action, attrs2Name, attrs2Action) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs1 = [
        this.attrs1Name = attrs1Name,
        this.attrs1Action = attrs1Action
    ]
    this.attrs2 = [
        this.attrs2Name = attrs2Name,
        this.attrs2Action = attrs2Action
    ]
}

let tagA = new Tags('a', ' предназначен для создания ссылок', 'accesskey',
    'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.')
console.log(tagA);

let tagDiv = new Tags('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'align', 'Задает выравнивание содержимого тега div', 'title', 'Добавляет всплывающую подсказку к содержимому.')

console.log(tagDiv);