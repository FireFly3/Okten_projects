// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        let divElement = document.createElement('div');
        divElement.classList.add('window');
        for (const user of users) {
            let blockItem = document.createElement('div');
            blockItem.classList.add('post');

            let userId = document.createElement('h2');
            userId.classList.add('id');
            userId.innerText = `UserID - ${user.userId}`;

            let idNumber = document.createElement('h3');
            idNumber.classList.add('id');
            idNumber.innerText = `Id - ${user.id}`;

            let title = document.createElement('h4');
            title.innerText = `Title: ${user.title}`;

            let bodyText = document.createElement('p');
            bodyText.innerText = `Body: ${user.body}`;

            let button = document.createElement('button');
            button.innerText = 'Comments';
            button.classList.add('button');

            button.onclick = function () {
                let elementsByClassName = document.getElementsByClassName('window2')[0];

                if (elementsByClassName) {
                    elementsByClassName.remove()
                }

                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        let divElement1 = document.createElement('div');
                        divElement1.classList.add('window2')
                        for (const comment of comments) {

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


                        }
                        divElement.appendChild(divElement1)

                    })
            }

            blockItem.append(userId, idNumber, title, bodyText, button)
            divElement.appendChild(blockItem)
            document.body.append(divElement)
        }

    })