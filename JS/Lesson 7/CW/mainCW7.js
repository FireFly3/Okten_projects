// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, madeIn, year, maxSpeed, volume) {
//     this.model = model;
//     this.madeIn = madeIn;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`модель - ${this.model}, виробник - ${this.madeIn}, рік випуску - ${this.year},
//          максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('tesla', 'USA', 2021, 300, 0);
// console.log(car1)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(350);
// car1.changeYear(2022);
// car1.addDriver('Fyodr');
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Cars {
//     constructor(model, madeIn, year, maxSpeed, volume) {
//         this.model = model;
//         this.madeIn = madeIn;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         info () {
//             console.log(`модель - ${this.model}, виробник - ${this.madeIn}, рік випуску - ${this.year},
//          максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`)
//         }
//         increaseMaxSpeed (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed;
//         }
//         changeYear (newValue) {
//             this.year = newValue;
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
//     }
//
//     let car1 = new Cars('tesla', 'USA', 2021, 300, 0);
//     console.log(car1)
//     car1.drive();
//     car1.info();
//     car1.increaseMaxSpeed(350);
//     car1.changeYear(2022);
//     car1.addDriver('Fyodr');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Princes(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let arr = [
//     new Princes('Olia', 21, 36),
//     new Princes('Anna', 19, 37),
//     new Princes('Ira', 18, 38),
//     new Princes('Jana', 19, 39),
//     new Princes('Sveta', 22, 40),
//     new Princes('Dasha', 24, 41),
//     new Princes('Diana', 18, 35),
//     new Princes('Oksana', 23, 34),
//     new Princes('Natasha', 219, 40),
//     new Princes('Kira', 20, 39),
// ]
//
// class Prince {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }
//
// let prince = new Prince('Dima', 22, 35);
// console.log(prince);
//
// let princes = arr.find(number => number.footSize = prince.slipper);
//
// console.log(princes);

