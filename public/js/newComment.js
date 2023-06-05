function handleSubmit(event){
    console.log('clicked')
    event.preventDefault()
    const content = document.querySelector("#comment").value
    const url = location.href
    const urlArray = url.split('/')
    const post_id = urlArray[urlArray.length -1]
    fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ content, post_id }),
        headers: {
            "Content-Type": "application/json"
        }
    }) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.message === "You are now logged in!") {
            window.location.href="/userPage"
        } else {
            window.alert("login error")
        }
    })
}

const comment = document.querySelector("#comment-form")
comment.addEventListener("submit", handleSubmit)