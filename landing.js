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
        <p class="director">${movie.director}</p>
        <p>${movie.release_date}</p>
        <p>${movie.running_time} minutes</p>
        <p>${movie.description}</p>
        `
        //     const moviePoster = document.createElement('img')
        //     moviePoster.src = movie.image
        //     movieListing.append(moviePoster)
    });