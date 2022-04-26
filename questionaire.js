const form = document.querySelector("form")
const $movieSelectionForm = document.querySelector("#movie-selection")
const $select = $movieSelectionForm.querySelector("select")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const userName = formData.get("user-name")
    const userEmail = formData.get("user-email")
    const favoriteMovie = formData.get("favorite-movie")
    const userMessage = formData.get("usermessage")

    console.log(localStorage)
    event.target.reset()
});

fetch("https://ghibliapi.herokuapp.com/films/")
    .then(response => {
        return response.json()
    })
    .then(movies => {
        const movieList = movies.map(movie => movie.title).map(title => {
            const $option = document.createElement("option")
            $option.value = title
            $option.textContent = title
            return $option
        }).forEach($option => {
            $select.append($option);
        })
    })