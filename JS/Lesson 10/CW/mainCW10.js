//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// let form1 = document.createElement('form');
// let input1_1 = document.createElement('input');
// let input1_2 = document.createElement('input');
//
// let form2 = document.createElement('form');
// let input2_1 = document.createElement('input');
// let input2_2 = document.createElement('input');
//
// let btn = document.createElement('button');
// btn.innerText = 'Download info';
//
// document.body.append(form1, form2, btn);
// form1.append(input1_1, input1_2);
// form2.append(input2_1, input2_2);
//
// btn.onclick = function () {
//     console.log(input1_1.value, input1_2.value, input2_1.value, input2_2.value);
// }

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



// let form = document.createElement('form');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Create';
// input1.setAttribute('type', 'number');
// input2.setAttribute('type', 'number');
// input3.setAttribute('type', 'text');
//
// form.append(input1, input2, input3);
// document.body.append(form, btn);
//
// btn.onclick = function (e) {
//     e.preventDefault();
//     let table = document.createElement('table');
//
//     for (let i = 0; i < input1.value; i++) {
//         let a = document.createElement('tr');
//         for (let j = 0; j < input2.value; j++) {
//             let b = document.createElement('td');
//             b.innerText = input3.value;
//             a.append(b);
//         }
//         table.append(a);
//     }
//     document.body.appendChild(table);
// }



//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//


// let arr = ['бля', 'хуйня', 'пиздец', 'долбоеб'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// let btn = document.createElement('button');
// btn.innerText = 'Check'
//
// document.body.append(input, btn);
//
// btn.onclick = function () {
//     for (const string of arr) {
//         if (input.value === string) {
//             alert('bad word')
//         }
//     }
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let arr = ['бля', 'хуйня', 'пиздец', 'долбоеб'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// let btn = document.createElement('button');
// btn.innerText = 'Check'
//
// document.body.append(input, btn);
//
// btn.onclick = function () {
//     for (const string of arr) {
//         if (input.value.includes( string)) {
//             alert('bad word')
//         }
//     }
// }
