function handleSubmit(event){
    event.preventDefault()
    const content = document.querySelector("#comment").value
    const url = location.href
    const urlArray = url.split('/')
    const post_id = urlArray[urlArray.length -1]
    fetch("/api/comments", {
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

const comment = document.querySelector("#submit-comment")
loginForm.addEventListener("submit", handleSubmit)