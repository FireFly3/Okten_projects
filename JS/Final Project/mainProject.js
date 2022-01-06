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


            let posts = document.createElement('button');
            posts.innerText = 'Posts';

            // posts.addEventListener("click", function(){
            //     let url = new URL(location.href);
            //     let searchUrl = url.search;
            //     // console.log(searchUrl);
            //
            //     let utm = {param: searchUrl}
            //
            //     let stringify = JSON.stringify(utm);
            //     console.log(stringify);
            //     // location = "post-details.html?Post_Id=${post.id}";
            // });


            block.append(id, name1, posts)
            window.append(block)
        }
        document.body.appendChild(window)
    });
