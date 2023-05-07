const signUpForm = document.querySelector("#signup-form")

console.log("hello")

function signUpHandler (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(username && email && password) {
        fetch("/api/users", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                userName: username,
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            window.location.href = "/userPage"
        })
    }

}


signUpForm.addEventListener("submit", signUpHandler)