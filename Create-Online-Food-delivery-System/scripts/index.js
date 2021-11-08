let logo = document.getElementById("logo");
let menuBtn = document.getElementById("menuBtn");
let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let cartBtn = document.getElementById("cartBtn");
let loginSubmitBtn = document.getElementById("loginSubmitBtn");
let signupSubmitBtn = document.getElementById("signupSubmitBtn");
let cartDiv = document.getElementById("cartDiv");

logo.addEventListener("click", () => {
    window.location.href = "./index.html";
});

menuBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
    showDishes();
});

loginBtn.addEventListener("click", () => {
    window.location.href = "./login.html";
});

signupBtn.addEventListener("click", () => {
    window.location.href = "./signup.html";
});

cartBtn.addEventListener("click", () => {
    window.location.href = "./cart.html";
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
        description: desc.value,
    };
    console.log(userData);
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
    // console.log(response);
    response.then((error) => {
        if (error) {
            alert("User already exists");
        } else {
            alert("Signing up successfull");
        }
    });
}

async function login(e) {
    e.preventDefault();
    let { username, password } = document.getElementById("loginForm");

    let userData = {
        username: username.value,
        password: password.value,
    };
    userData = JSON.stringify(userData);
    console.log(userData);

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: "POST",
        body: userData,
        headers: {
            "Content-Type": "application/json",
        },
    });

    let response = res.json();
    response.then(({ error }) => {
        console.log(error);
        if (error) {
            alert("Wrong Credentials");
        } else {
            alert("Logged in successfull");
        }
    });
}

async function getDishes() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

    let response = res.json();
    return response;
}

if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
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
        price.innerText = "Price : " + Math.ceil(Math.random() * 500);
        let desc = document.createElement("p");
        desc.innerText = data.strInstructions;

        let addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Add To Cart";
        addToCartButton.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.push(data);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Item added to cart.");
        });

        div.append(img, price, desc, addToCartButton);
        mealsDiv.append(div);
    });
}
showDishes();

function showDishesToCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    let cartDiv = document.getElementById("cartDiv");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = cart[cart.length - 1].strMealThumb;
    let price = document.createElement("p");
    price.innerText = "Price : " + Math.ceil(Math.random() * 500);
    let desc = document.createElement("p");
    desc.innerText = cart[cart.length - 1].strInstructions;

    let orderBtn = document.createElement("button");
    orderBtn.innerText = "ORDER";
    orderBtn.addEventListener("click", () => {
        setTimeout(() => {
            alert("order placed successfully.");
        }, 2000);
        setTimeout(() => {
            alert("Your order is accepted.");
        }, 4000);
        setTimeout(() => {
            alert("Your order is being cooked.");
        }, 8000);
        setTimeout(() => {
            alert("Your order is ready.");
        }, 10000);
        setTimeout(() => {
            alert("Order out for delivery.");
        }, 12000);
        setTimeout(() => {
            alert("Order delivered.");
        }, 14000);
    });

    div.append(img, price, desc, orderBtn);
    cartDiv.append(div);

    localStorage.setItem("cart", JSON.stringify(cart));
}
showDishesToCart();
