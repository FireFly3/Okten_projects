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
idP.style.background = 'red';
idP.style.color = 'blue';

// -- замініть текст параграфа з id 'rules' на будь-який інший
idDiv.innerText = 'qweasd';
console.log(idDiv);
idDiv.style.background = 'red';
idDiv.style.color = 'blue';

// -- змініть кожному елементу колір фону на червоний


let clasesli = document.getElementsByClassName('fc_rules');
console.log(clasesli)
for (const li of clasesli) {
    if (p.innerText.includes('Lorem')) {
        p.style.background = 'red';
    }
}


idP.style.background = 'red';
idDiv.style.background = 'red';
// clasesli.style.background = 'red';


// -- змініть кожному елементу колір тексту на синій

idP.style.color = 'blue';
idDiv.style.color = 'blue';


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний