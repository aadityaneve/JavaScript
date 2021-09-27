




let cart = JSON.parse(localStorage.getItem('cart'));

let totalAmount = 0;


cart.forEach(function (product) {
    let card = document.createElement('div');
    let img = document.createElement('img');
    img.src = product.img;

    let name = document.createElement('h3');
    name.innerText = product.name;

    let price = document.createElement('h3');
    price.innerText = product.price;

    let brand = document.createElement('h2');
    brand.innerText = product.brand;

    totalAmount += Number(product.price);

    card.append(img, name, price, brand);
    products.append(card);
});



let totalBill = document.getElementById('totalBill');
let h2Label = document.createElement('h2');
h2Label.innerText = 'Total Amount:';
let h2 = document.createElement('h2');
h2.innerText = totalAmount;

let string = "";
let promoCodeInput = document.createElement('input');
promoCodeInput.placeholder = 'Promo Code';
promoCodeInput.addEventListener('keypress', function (keyLog) {
    string+=keyLog.key;
    console.log(string);
    if(string == 'masai30'){
        
        h2.innerHTML = null;
        h2.innerText = Math.round(totalAmount-(totalAmount*0.3));
    }
});

totalBill.append(h2Label, h2, promoCodeInput);


let buttons = document.getElementById('buttons');
let checkoutButton = document.createElement('button');
    checkoutButton.innerText = 'CHECKOUT';
    checkoutButton.addEventListener('click',function(){
        window.location.href = 'checkout.html';
    });

buttons.append(checkoutButton);
