//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(users => {
//         let divElement = document.createElement('div');
//         divElement.classList.add('window')
//         for (const user of users) {
//             let blockItem = document.createElement('div');
//             blockItem.classList.add('post');
//
//             let userId = document.createElement('h2');
//             userId.classList.add('id')
//             userId.innerText = `UserID - ${user.userId}`
//
//             let idNumber = document.createElement('h3');
//             idNumber.classList.add('id')
//             idNumber.innerText = `Id - ${user.id}`
//
//             let title = document.createElement('h4');
//             title.innerText = `Title: ${user.title}`
//
//             let bodyText = document.createElement('p');
//             bodyText.innerText = `Body: ${user.body}
//             `
//             blockItem.append(userId, idNumber, title, bodyText)
//             divElement.appendChild(blockItem)
//             document.body.append(divElement)
//
//
// }
//
// })


//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         let divElement = document.createElement('div');
//         divElement.classList.add('window')
//         for (const comment of comments) {
//
//             let blockItem = document.createElement('div');
//             blockItem.classList.add('comment');
//
//             let postId = document.createElement('h2');
//             postId.classList.add('id')
//             postId.innerText = `PostId - ${comment.postId}`
//
//             let idNumber = document.createElement('h3');
//             idNumber.classList.add('id')
//             idNumber.innerText = `Id - ${comment.id}`
//
//             let name = document.createElement('h4');
//             name.innerText = `Name: ${comment.name}`
//
//             let email = document.createElement('p');
//             email.innerText = `Email - ${comment.email}`
//
//             let bodyText = document.createElement('p');
//             bodyText.innerText = `Body: ${comment.body}
//             `
//             blockItem.append(postId, idNumber, name, email, bodyText)
//             divElement.appendChild(blockItem)
//             document.body.append(divElement)
//
//
//         }
//     })

