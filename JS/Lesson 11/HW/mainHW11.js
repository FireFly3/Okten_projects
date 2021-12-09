// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form1 = document.createElement('form');
//
// let inputName = document.createElement('input');
// inputName.setAttribute('type', 'text');
//
// let inputAge = document.createElement('input');
// inputAge.setAttribute('type', 'number');
//
// let btn = document.createElement('button');
// btn.innerText = 'Save to localstorage';
//
// form1.append(inputName, inputAge);
// document.body.append(form1, btn);
//
// btn.onclick = function () {
//     localStorage.setItem('name', inputName.value);
//     localStorage.setItem('age', inputAge.value);
// }



//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let form1 = document.createElement('form');
//
// let inputModel = document.createElement('input');
// inputModel.setAttribute('type', 'text');
//
// let inputType = document.createElement('input');
// inputType.setAttribute('type', 'text');
//
// let inputVolume = document.createElement('input');
// inputVolume.setAttribute('type', 'number');
//
// let btn = document.createElement('button');
// btn.innerText = 'Save to arr in localstorage';
//
// document.body.append(form1, btn);
// form1.append(inputModel, inputType, inputVolume);
//
// btn.onclick = function () {
//     let arrAuto = [];
//     arrAuto.push(inputModel.value, inputType.value, inputVolume.value);
//     let stringArr = JSON.stringify(arrAuto);
//     localStorage.setItem('auto', stringArr);
//
// }