// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"


let idP = document.getElementById('content');
console.log(idP);


// -- отримує текст з блоку з id "rules"


let idDiv = document.getElementById('rules');
console.log(idDiv);


// -- замініть текст параграфа з id 'content' на будь-який інший


idP.innerText = 'asdqwe';
console.log(idP);


// -- замініть текст параграфа з id 'rules' на будь-який інший


idDiv.innerText = 'qweasd';
console.log(idDiv);


// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій


idP.style.background = 'red';
idP.style.color = 'blue';

idDiv.style.background = 'red';
idDiv.style.color = 'blue';

let clasesUl = document.getElementsByTagName('ul');
let ul1 = clasesUl[0];
let clasesli = ul1.getElementsByClassName('fc_rules');
console.log(clasesli);
for (const clasesliElement of clasesli) {
    clasesliElement.style.background = 'red';
    clasesliElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log


let idClass = document.getElementById('rules');
console.log(idClass);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.querySelectorAll('.fc_rules');
console.log(fc_rules);
for (const fcRule of fc_rules) {
    fcRule.style.color = 'red';
}