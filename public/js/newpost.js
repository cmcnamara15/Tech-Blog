async function newPostHandler(event) {
    event.preventDefault();
    console.log("clicked")

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    console.log(title)
    console.log(content)
    

    if (title && content) {
        const response = await fetch(`/api/userPage`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
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
