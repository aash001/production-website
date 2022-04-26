const movieListing = document.querySelector(".movie-listing")
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
        movieListing.innerHTML = `
        <img src=${movie.image} alt="Movie Poster"/>
        <h2><span>Title: </span>${movie.title}</h2>
        <p class="director">Director: ${movie.director}</p>
        <p>Release Date: ${movie.release_date}</p>
        <p>Run Time: ${movie.running_time} minutes</p>
        <h4> Summary </h4>
        <p>${movie.description}</p>
        `
    });