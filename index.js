const movieListing = document.querySelector(".movie-listing")
const url = "https://ghibliapi.herokuapp.com/films/"


fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedReponse => {
        const movieImageArray = parsedReponse.map(movie => movie.image)
        movieImageArray.forEach(movieUrl => {
            const img = document.createElement("img")
            const movieDesc = document.createElement("p")
            img.classList.add('movieThumb')
            img.src = `${movieUrl}`;
            movieListing.append(img)
            console.log(parsedReponse)
        });
    })