// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let divElement = document.createElement('div');
// divElement.setAttribute('id', 'text');
//
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'button';
// divElement.innerText = 'Blok';
// document.body.append(divElement, buttonElement);
//
// buttonElement.onclick = function () {
//     divElement.style.display = 'none';
// }


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//


// let button = document.createElement('button');
// button.innerText = 'button';
// document.body.append(button);
//
// button.onclick = function (){
//     button.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//


// let form = document.createElement('form');
//
// let input = document.createElement('input');
// input.setAttribute('type', 'number');
//
// let button = document.createElement('button');
// button.innerText = 'Подтвердить';
//
// form.append(input, button);
// document.body.append(form);
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (input.value < 18) {
//         document.write('small age');
//     }
// }





// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.createElement('div');
// menu.innerText = 'Menu';
//
// let first = document.createElement('div');
// first.innerText = 'first meal';
//
// let second = document.createElement('div');
// second.innerText = 'second meal';
//
// let third = document.createElement('div');
// third.innerText = 'third meal';
//
// menu.append(first, second, third);
// document.body.appendChild(menu);
//
// menu.onclick = function () {
//     first.classList.toggle('minHeight')
//     second.classList.toggle('minHeight')
//     third.classList.toggle('minHeight')
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comment = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem1', body:'lorem1 ipsum dolo sit ameti'},
//     {title : 'lorem2', body:'lorem2 ipsum dolo sit ameti'},
//     {title : 'lorem3', body:'lorem3 ipsum dolo sit ameti'},
//     {title : 'lorem4', body:'lorem4 ipsum dolo sit ameti'},
//     {title : 'lorem5', body:'lorem5 ipsum dolo sit ameti'}
// ]
//
// for (const commentElement of comment) {
//     let htmlDivElement = document.createElement('div');
//
//     let title = document.createElement('div');
//     title.innerText = commentElement.title;
//
//     let body = document.createElement('div');
//     body.innerText = commentElement.body;
//
//     let buttonElement = document.createElement('button');
//     buttonElement.innerText = 'commit'
//
//     buttonElement.onclick = function () {
//         body.classList.toggle('minHeight');
//
//     }
//     htmlDivElement.append(title, body, buttonElement)
//     document.body.appendChild(htmlDivElement);
// }