const loginForm = document.querySelector("#login-form")

function handleSubmit(event){
    event.preventDefault()
    const userName = document.querySelector("#userName").value
    const password = document.querySelector("#password").value
    fetch('/api/users/login', {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json)
    .then(data => {
        console.log(data)
    })
}

loginForm.addEventListener("submit", handleSubmit)