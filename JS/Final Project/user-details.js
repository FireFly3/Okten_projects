let values = localStorage.getItem('id');
let userId = JSON.parse(values);
console.log(userId);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let window = document.createElement('div');
        window.classList.add('window')
        for (const user of users) {
            if (user.id === userId) {
                let block = document.createElement('div');
                block.classList.add('block')

                let id = document.createElement('h5');
                id.innerText = `Id: ${user.id}`;

                let name1 = document.createElement('h5');
                name1.innerText = `Name: ${user.name}`;

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
                posts.classList.add('button1');
                posts.innerText = 'Posts of current user';

                block.append(id, name1, userName, email, address, phone, website, company)

                window.append(block, posts)
                posts.onclick = function () {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(result => result.json())
                        .then(posts => {


                            for (const post of posts) {
                                console.log(post);
                                let divElement = document.createElement('div');
                                divElement.classList.add('block1')

                                let blockItem = document.createElement('div');
                                blockItem.classList.add('post');

                                let userId = document.createElement('h2');
                                userId.classList.add('id');
                                userId.innerText = `UserID - ${post.userId}`;

                                let idNumber = document.createElement('h3');
                                idNumber.classList.add('id');
                                idNumber.innerText = `Id - ${post.id}`;

                                let title = document.createElement('h4');
                                title.innerText = `Title: ${post.title}`;

                                let bodyText = document.createElement('p');
                                bodyText.innerText = `Body: ${post.body}`;

                                let button = document.createElement('button');
                                button.innerText = 'Comments';
                                button.classList.add('button2');

                                button.addEventListener("click", function (e) {
                                    e.preventDefault();
                                    localStorage.setItem('postId', `${post.id}`);
                                })
                                button.addEventListener("click", function (e) {
                                    location = "post-details.html";

                                });

                                blockItem.append(title, button)
                                divElement.appendChild(blockItem)
                                window.append(divElement)
                            }
                        })
                }
                block.append(id, name1, userName, email, address, phone, website, company)
                window.append(block, posts)
            }
            document.body.appendChild(window)
        }

    })