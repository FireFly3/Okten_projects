// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let window = document.createElement('div');
        window.classList.add('window')
        for (const user of users) {
            let block = document.createElement('div');
            block.classList.add('block')

            let id = document.createElement('h5');
            id.innerText = `Id: ${user.id}`;

            let name = document.createElement('h5');
            name.innerText = `Name: ${user.name}`;

            let userName = document.createElement('h5');
            userName.innerText = `Username: ${user.username}`;

            let email = document.createElement('h5');
            email.innerText = `Email: ${user.email}`;

            let address = document.createElement('h5');
            address.innerText = `Address:  street: ${user.address.street} suite: ${user.address.suite} 
            city: ${user.address.city} zipcode: ${user.address.zipcode} geo: lat: ${user.address.geo.lat} 
            lng: ${user.address.geo.lng}`

            let phone = document.createElement('h5');
            phone.innerText = `phone: ${user.phone}`;

            let website = document.createElement('h5');
            website.innerText = `website: ${user.website}`;

            let company = document.createElement('h5');
            company.innerText = `company name: ${user.company.name} catchPhrase: ${user.company.catchPhrase} bs: ${user.company.bs} `;

            let posts = document.createElement('button');
            posts.innerText = 'Posts';

            posts.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/users`)
                    .then(result => result.json())
                    .then(posts => {

                        let elementsByClassName = document.getElementsByClassName('window2')[0];

                        if (elementsByClassName) {
                            elementsByClassName.remove()
                        }

                        let divElement1 = document.createElement('div');
                        divElement1.classList.add('window2')

                        for (const post of posts) {
                        }
                    })

            }






                block.append(id, name, userName, email, address, phone, website, company, posts)
                window.append(block)
                document.body.appendChild(window)
            }

    })