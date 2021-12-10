let values = localStorage.getItem('Favorite')
let obj = JSON.parse(values)
for (const objElement of obj) {
    document.write(objElement)
}

// let string_value = JSON.stringify(values);
// document.write(string_value)


