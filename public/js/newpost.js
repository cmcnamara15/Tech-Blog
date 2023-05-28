async function newPostHandler(event) {
    event.preventDefault();
    console.log("clicked")

    const title = document.querySelector('#title').value.trim();
    const post_body = document.querySelector('#content').value.trim();
    console.log(title)
    console.log(post_body)
    

    if (title && post_body) {
        const response = await fetch(`/api/userPage`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/userPage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.newPost').addEventListener('submit', newPostHandler);
