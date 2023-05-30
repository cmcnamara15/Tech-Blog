const logoutLink = document.querySelector("#logout")

function handleSubmit(event){
    event.preventDefault()
    console.log("clicked me")

    fetch("/api/users/logout", {
        method: "POST",
    }) 
    .then(data => {
        // if(data.message === "You are now logged in!") {
            window.location.href="/"
        // } else {
        //     window.alert("login error")
        // }
    })
}

logoutLink.addEventListener("click", handleSubmit)


