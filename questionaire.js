const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const userName = formData.get("user-name")
    const email = formData.get("user-email")
    const favoriteMovie = formData.get("favorite-movie")
    const userMessage = formData.get("usermessage")
    console.log(userName, email, favoriteMovie, userMessage)
    event.target.reset()
})