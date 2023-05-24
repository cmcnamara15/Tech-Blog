const loginForm = document.querySelector("#login-form")

function handleSubmit(){
    const userName = document.querySelector("#userName")
    const password = document.querySelector("#password")
    fetch()
    .then(res => res.json)
    .then(data => {
        console.log(data)
    })
}

loginForm.addEventListener("submit", handleSubmit)