/* 
            Problem
            when user clicks on any movie from search results, show the details of clicked movie
            show image, imdb rating, cast ( if possible ) etc.
        */

let timer;
async function getMovies(title) {
    // e.preventDefault();
    // let title = document.getElementById('title').value;

    let response = await fetch(
        `http://www.omdbapi.com/?apikey=4131a77&s=${title}&plat=full`
    );

    let data = await response.json();
    // console.log(data);

    if (data.Response === "True") {
        document.getElementById("displayError").innerHTML = null;
        moviesDiv.innerHTML = null;
        showMovies(data.Search);
    } else {
        document.getElementById("moviesDiv").innerHTML = null;
        document.getElementById("displayError").innerHTML = null;

        let displayError = document.getElementById('displayError');
        let img = document.createElement('img');
        img.src = "https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif";
        displayError.append(img);
    }

}

let moviesDiv = document.getElementById('moviesDiv');
function showMovies(data) {
    data.forEach(function (movie) {

        let div = document.createElement('div');
        div.setAttribute("style", "background-color: whitesmoke;");
        div.setAttribute("style", "padding: 3%;");
        let poster = document.createElement('img');
        poster.src = movie.Poster;
        let title = document.createElement('h4');
        title.innerText = movie.Title;
        let type = document.createElement('p');
        type.innerText = movie.Type;
        let year = document.createElement('h4');
        year.innerText = movie.Year;



        // Getting rating of movies
        let rating = document.createElement('h4');
        let imdbID = movie.imdbID;
        let ratingValue = 0;

        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=4131a77`)
            .then(function (res) {
                return res.json();
            })

            .then(function (res) {

                if (localStorage.getItem('movieData') === null) {
                    localStorage.setItem('movieData', JSON.stringify([]));
                }

                // clicked on div will show details of that movie
                div.addEventListener("click", function (e) {
                    console.log(res);
                    let movieData = JSON.parse(localStorage.getItem('movieData'));
                    movieData.push(res);
                    localStorage.setItem('movieData', JSON.stringify(movieData));
                    window.location.href = 'movie-details.html';
                })

                return res;
            })

            .then(function (res) {
                // console.log(res.Ratings[0].Value);                        
                rating.innerText = res.Ratings[0].Value;
                // console.log((res.Ratings[0].Value).slice(0 ,3));
                ratingValue = Number((res.Ratings[0].Value).slice(0, 3));

                if (ratingValue >= 8.0) {
                    let recommended = document.createElement('div');
                    recommended.innerHTML = "<strong>Recommended</strong>"
                    recommended.setAttribute("style", "z-index: 1; position: absolute; background-color: #ffd466; padding: 0.3em;");
                    div.append(recommended, poster, title, type, rating, year);
                } else {
                    div.append(poster, title, type, rating, year);
                }
            })

        moviesDiv.append(div);

    });
}


function main() {
    let title = document.getElementById('title').value;

    if (title.length < 3) {
        return false;
    }

    getMovies(title);
}

function debounce(main, delay) {

    if (timer) {
        clearInterval(timer);
    }

    timer = setTimeout(function () {
        main();
    }, delay)

}



function displayMovieData() {

    let movieData = JSON.parse(localStorage.getItem('movieData'));

    let movieDetails = document.getElementById("movieDetails");


    let leftDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = movieData[movieData.length - 1].Poster;
    leftDiv.append(img);



    let rightDiv = document.createElement('div');
    let title = document.createElement('h1');
    title.innerText = movieData[movieData.length - 1].Title;
    let actors = document.createElement('h3');
    actors.innerText = movieData[movieData.length - 1].Actors;
    let language = document.createElement('h3');
    language.innerText = movieData[movieData.length - 1].Language;
    let rating = document.createElement('h3');
    rating.innerText = movieData[movieData.length - 1].Ratings[0].Value;
    let released = document.createElement("h3");
    released.innerText = movieData[movieData.length - 1].Released;
    let type = document.createElement('h3');
    type.innerText = movieData[movieData.length - 1].Type;





    rightDiv.append(title, actors, language, rating, released, type);

    movieDetails.append(leftDiv, rightDiv);
    localStorage.setItem('movieData', JSON.stringify(movieData));

}