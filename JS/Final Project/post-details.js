let values = localStorage.getItem('postId');
let postId = JSON.parse(values);
console.log(postId);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let window = document.createElement('div');
        window.classList.add('window')
        for (const post of posts) {
            if (post.id === postId) {
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

                blockItem.append(userId, idNumber, title, bodyText)
                divElement.appendChild(blockItem)
                window.append(divElement)

                fetch(`https://jsonplaceholder.typicode.com/comments`)
                    .then(response => response.json())
                    .then(comments => {

                        for (const comment of comments) {
                            if (postId === comment.postId) {
                                let divElement1 = document.createElement('div');
                                divElement1.classList.add('block2')

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

                                window.append(divElement1)
                            }
                        }
                    })

            }
            document.body.appendChild(window)
        }

    })