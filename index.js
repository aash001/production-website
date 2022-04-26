const movieListing = document.querySelector(".movie-listing")
const loader = document.querySelector(".loader")

function addMoviePic(movie) {
    const moviePic = document.createElement("figure")
    moviePic.classList.add('movieThumb')
    moviePic.innerHTML = `
            <a href="landing.html?id=${movie.id}">
            <img src="${movie.image}"/>
            <figcaption>${movie.title}</figcaption>
            </a>
            `
    movieListing.append(moviePic)
}

const url = "https://ghibliapi.herokuapp.com/films/"
fetch(url)
    .then(response => {
        return response.json()
    }).then(listOfMovies => {
        listOfMovies.forEach(movie => addMoviePic(movie))
        loader.classList.add("hide")
    })