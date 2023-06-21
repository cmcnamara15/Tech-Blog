async function handleSubmit(event){
        console.log('clicked')
        event.preventDefault()
        const content = document.querySelector("#comment").value
        const url = location.href
        const urlArray = url.split('/')
        const post_id = urlArray[urlArray.length -1]
        console.log(content)
        console.log(post_id)
    
    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                content,
                post_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            // event.preventDefault()
            // document.location.replace(`/blogPost/${post_id}`);
        } else {
            alert(response.statusText);
        }
    }
}



const comment = document.querySelector("#comment-form")
comment.addEventListener("submit", handleSubmit)