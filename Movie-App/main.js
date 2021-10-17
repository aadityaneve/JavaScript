/* 
            Problem
            Create a page where you can show list of trending/popular movies
            Use API - https://developers.themoviedb.org/    
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







function displayMovies(data) {
    document.getElementById("moviesDiv").innerHTML = null;
    data.forEach(function (movie) {

        let div = document.createElement('div');
        div.setAttribute("style", "background-color: whitesmoke;");
        div.setAttribute("style", "padding: 3%;");
        let poster = document.createElement('img');
        poster.src = "http://image.tmdb.org/t/p/w185" + movie.poster_path;
        let title = document.createElement('h4');
        title.innerText = movie.title;
        let rating = document.createElement('h4');
        rating.innerText = movie.vote_average;

        let year = document.createElement('h4');
        year.innerText = movie.release_date;

        // console.log(typeof movie.vote_average);
        let recommended = document.createElement('div');
        if (movie.vote_average >= 8.0) {
            recommended.innerHTML = "<strong>Recommended</strong>"
            recommended.setAttribute("style", "z-index: 1; position: absolute; background-color: #ffd466; padding: 0.3em;");
            div.append(recommended, poster, title, rating, year);
        } else {
            div.append(poster, title, rating, year);
        }

        moviesDiv.append(div);
    })
}


async function getTopRatedMovies(e) {
    e.preventDefault();

    let response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US&page=1`
    );

    let data = await response.json();
    console.log(data.results);

    displayMovies(data.results);
}


async function getTrendingMovies(e) {
    e.preventDefault();

    let response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=14dc73a4bd1abf7c14d4209c112b4496&language=en-US&page=1`
    );

    let data = await response.json();
    console.log(data.results);

    displayMovies(data.results);
}



// signup/login button click divert user ot singup-login.html
let signupLoginBtn = document.getElementById('signupLogin');
signupLoginBtn.addEventListener('click', () => {
    window.location.href = 'signup-login.html';
})


// Signup form
async function Signup(e) {
    e.preventDefault();

    let form = document.getElementById('signupForm');

    let userData = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        username: form.username.value,
        mobile: form.mobile.value,
        description: form.description.value
    }

    userData = JSON.stringify(userData);

    let getResponse = await fetch(
        'https://masai-api-mocker.herokuapp.com/auth/register',
        {
            method: 'POST',
            body: userData,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

    let response = getResponse.json();
    response.then((res) => {
        alert(res.message);
    })
}


// Login form
async function Login(e) {
    e.preventDefault();

    let form = document.getElementById('loginForm');

    let userData = {
        username: form.user.value,
        password: form.pass.value,
    }
    userData = JSON.stringify(userData);

    let getResponse = await fetch(
        'https://masai-api-mocker.herokuapp.com/auth/login',
        {
            method: 'POST',
            body: userData,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

    let response = getResponse.json();
    response.then((res) => {
        if (res.error == false && res.token) {
            window.location.href = 'movie-app-3.html';
            storeUserNameToLocalStorage(userData);
            displayUserName();
        }
    })


}


// Storing user name to localStorage
if (localStorage.getItem('username') === null) {
    localStorage.setItem('username', JSON.stringify([]));
}

function storeUserNameToLocalStorage(userData) {

    let localStorageUserName = JSON.parse(localStorage.getItem('username'));

    userData = JSON.parse(userData);
    localStorageUserName.push(userData.username);

    localStorage.setItem('username', JSON.stringify(localStorageUserName));
}


function displayUserName(){

    let userName = document.getElementById('username');

    let nameOfUser = JSON.parse(localStorage.getItem('username'));

    userName.innerHTML = `<h2> Welcome! ${nameOfUser[nameOfUser.length-1]}</h2>`;

    localStorage.setItem('username',JSON.stringify(nameOfUser));
}
displayUserName();
