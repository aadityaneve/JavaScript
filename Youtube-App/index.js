async function getMostPopularVideos() {

    let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?chart=mostPopular&topicId=video&key=AIzaSyAWVBSv9VlRNPF287FeOC_2wJUvoW3LvpM&maxResults=20`
    )

    let data = await response.json();
    let videoItems = data.items;
    appendVideos(videoItems);
}
getMostPopularVideos();


let videosDiv = document.getElementById('videosDiv');
async function searchVideos(e) {
    e.preventDefault();

    let query = document.getElementById('query').value;

    let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=${query}&topicId=video&key=AIzaSyAWVBSv9VlRNPF287FeOC_2wJUvoW3LvpM&maxResults=20`
    )

    let data = await response.json();
    let videoItems = data.items;

    console.log(videoItems);
    appendVideos(videoItems);
}


function appendVideos(videoData) {
    videosDiv.innerHTML = null;
    videoData.forEach(({ id: { videoId } }) => {
        console.log(videoId);

        let div = document.createElement('div');
        // Emvade YT video on our app
        div.innerHTML =
            `
                <iframe width="539" 
                    height="349" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `

        videosDiv.append(div);

    })

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
            window.location.href = 'index.html';
            storeUserNameToLocalStorage(userData);
            displayUserName();
        }
    })
    response.catch((err) => {
        alert('User does not exist!');
        console.log(err);
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

    if(nameOfUser.length == 0){
        userName.innerHTML = `<h2> Welcome!</h2>`;

    }else{
        userName.innerHTML = `<h2> Welcome! ${nameOfUser[nameOfUser.length-1]}</h2>`;
    }

    localStorage.setItem('username',JSON.stringify(nameOfUser));
}
displayUserName();
