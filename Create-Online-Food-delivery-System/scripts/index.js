let logo = document.getElementById("logo");
let menuBtn = document.getElementById("menuBtn");
let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let loginSubmitBtn = document.getElementById("loginSubmitBtn");
let signupSubmitBtn = document.getElementById("signupSubmitBtn");

logo.addEventListener("click", () => {
    window.location.href = "./index.html";
});

menuBtn.addEventListener("click", () => {
    // window.location.href = "./index.html";
});

loginBtn.addEventListener("click", () => {
    window.location.href = "./login.html";
});

signupBtn.addEventListener("click", () => {
    window.location.href = "./signup.html";
});

/* 
{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}


https://masai-api-mocker.herokuapp.com/auth/register
 */

async function signup(e) {
    e.preventDefault();
    let { name, email, password, username, mobile, desc } =
        document.getElementById("signupForm");

    let userData = {
        name: name.value,
        email: email.value,
        password: password.value,
        username: username.value,
        mobile: mobile.value,
        desc: desc.value,
    };
    userData = JSON.stringify(userData);

    let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/register`,
        {
            method: "POST",
            body: userData,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    let response = res.json();
    console.log(response);
}

async function login(e) {
    e.preventDefault();

    e.preventDefault();
    let { username, password } = document.getElementById("loginForm");

    let userData = {
        username: username.value,
        password: password.value,
    };
    console.log(userData);
    userData = JSON.stringify(userData);

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: "POST",
        body: userData,
        headers: {
            "Content-Type": "application/json",
        },
    });

    let response = res.json();
    console.log(response);
}

async function getDishes() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

    let response = res.json();
    return response;
}

function showDishes() {
    let res = getDishes();
    res.then(function (data) {
        data = data.meals[0];
        let mealsDiv = document.getElementById("mealsDiv");
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data.strMealThumb;
        let price = document.createElement("p");
        price.innerText = Math.ceil(Math.random() * 500);
        let desc = document.createElement("p");
        desc.innerText = data.strInstructions;

        let addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Add To Cart";

        div.append(img, price, desc, addToCartButton);
        mealsDiv.append(div);
    });
}
showDishes();
