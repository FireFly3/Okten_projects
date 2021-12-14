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
            posts.innerText = 'Posts';

            posts.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(result => result.json())
                    .then(posts => {

                        // let blockPost = document.getElementsByClassName('block')[0];
                        //
                        // if (blockPost) {
                        //     blockPost.remove()
                        // }
                        //


                        for (const post of posts) {
                            console.log(post);
                            let divElement = document.createElement('div');
                            divElement.classList.add('block')

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
                            button.classList.add('button');

                            button.onclick = function () {


                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        // let elementsByClassName = document.getElementsByClassName('window2')[0];
                                        //
                                        // if (elementsByClassName) {
                                        //     elementsByClassName.remove()
                                        // }
                                        for (const comment of comments) {
                                        let divElement1 = document.createElement('div');
                                        divElement1.classList.add('block')

                                            let blockItem1 = document.createElement('div');
                                            blockItem1.classList.add('comment');

                                            let postId1 = document.createElement('h2');
                                            postId1.classList.add('id')
                                            postId1.innerText = `PostId - ${comment.postId}`

                                            let idNumber1 = document.createElement('h3');
                                            idNumber1.classList.add('id')
                                            idNumber1.innerText = `Id - ${comment.id}`

                                            let name1 = document.createElement('h4');
                                            name1.innerText = `Name: ${comment.name}`

                                            let email1 = document.createElement('p');
                                            email1.innerText = `Email - ${comment.email}`

                                            let bodyText1 = document.createElement('p');
                                            bodyText1.innerText = `Body: ${comment.body}
            `
                                            blockItem1.append(postId1, idNumber1, name1, email1, bodyText1)
                                            divElement1.appendChild(blockItem1)


                                      window.appendChild(divElement1)
                                        }

                                    })
                            }

                            blockItem.append(userId, idNumber, title, bodyText, button)
                            divElement.appendChild(blockItem)
                            window.append(divElement)
                        }
                    })
            }
        block.append(id, name1, userName, email, address, phone, website, company, posts)
        window.append(block)
        }
        document.body.appendChild(window)
    })