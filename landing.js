const movieFocus = document.querySelector(".movie-focus")
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString) //object

const id = queryParams.get("id")
console.log(id)

const url = `https://ghibliapi.herokuapp.com/films/${id}`
fetch(url)
    .then(response => {
        return response.json()
    }).then(movie => {
        console.log(movie)
        movieFocus.innerHTML = `
        <img src=${movie.image} alt="Movie Poster"/>
        <p><span>Title:</span> ${movie.title}</p>
        <p><span>Director:</span> ${movie.director}</p>
        <p><span>Release Date:</span> ${movie.release_date}</p>
        <p><span>Run Time:</span> ${movie.running_time} minutes</p>
        <p><span>Summary</span></p>
        <p class="summary">${movie.description}</p>
        `
    });