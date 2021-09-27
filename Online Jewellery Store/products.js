

let allProducts = [
    {
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501095HECAAA01.jpg?impolicy=pqmed&imwidth=640',
        name: 'Blooming Bud Gold Stud Earrings',
        price: '8099',
        brand: 'Tanishq'
    },
    {
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/500067SCAABC22_1.jpg?impolicy=pqmed&imwidth=640',
        name: 'Beguiling Floral Diamond Stud',
        price: '4999',
        brand: 'Tanishq'
    },
    {
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/500473HNAAAA09_1.jpg?impolicy=pqmed&imwidth=640',
        name: 'Ethereal Floral Diamond Hoop',
        price: '3999',
        brand: 'Kalyan'
    },
    {
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501163SIKAAA02_1.jpg?impolicy=pqmed&imwidth=640',
        name: 'Enigmatic Floral Diamond Stud',
        price: '9999',
        brand: 'Kalyan'
    },
    {
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501166DBWAGA00.jpg?impolicy=pqmed&imwidth=640',
        name: 'Charming Contemporary Gold',
        price: '10099',
        brand: 'Tanishq'
    },
    {
        img: 'https://staticimg.titan.co.in/Tanishq/Catalog/501181HGFAAA01.jpg?impolicy=pqmed&imwidth=640',
        name: 'Elegantly Twisted Contemporary',
        price: '88099',
        brand: 'Kalyan'
    }
];



let products = document.getElementById('products');

function showProducts(data) {
    products.innerHTML = null;
    data.forEach(function (product) {
        let card = document.createElement('div');
        let img = document.createElement('img');
        img.src = product.img;

        let name = document.createElement('h3');
        name.innerText = product.name;

        let price = document.createElement('h3');
        price.innerText = product.price;

        let brand = document.createElement('h2');
        brand.innerText = product.brand;


        let addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Card';
        addToCartButton.addEventListener('click', function () {
            addToCart(product);
        });


        card.append(img, name, price, brand, addToCartButton);
        products.append(card);
    });
}
showProducts(allProducts);






if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
}

function addToCart(product) {
    // console.log(product);
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}


let buttons = document.getElementById('buttons');

let highToLow = document.createElement('button');
highToLow.innerText = 'High to Low';
highToLow.addEventListener('click', function () {
    let hignToLowProducts = allProducts.sort(function (product1, product2) {
        return product2.price - product1.price;
    });
    showProducts(hignToLowProducts);
})

let lowToHigh = document.createElement('button');
lowToHigh.innerText = 'Low to High';
lowToHigh.addEventListener('click', function () {
    let lowToHighProducts = allProducts.sort(function (product1, product2) {
        return product1.price - product2.price;
    });
    showProducts(lowToHighProducts);
});


let filterByBrand = document.createElement('select');
filterByBrand.innerText = 'Filter by Brand';
filterByBrand.addEventListener('change',function(e){
    // console.log(e.target.value);
    let products = allProducts.filter(function(product){
        return product.brand == e.target.value;
    })
    showProducts(products)
})

let kalyan = document.createElement('option');
kalyan.innerText = 'Kalyan';

let tanishq = document.createElement('option');
tanishq.innerText = 'Tanishq';

filterByBrand.append(kalyan);
filterByBrand.append(tanishq);

let priceRange = document.createElement('input');
priceRange.placeholder = 'Enter Price Range';
let string = "";
priceRange.addEventListener('keypress', function (keyLog){
    string+=keyLog;
    let price = Number(string)
    let products = allProducts.filter(function(product){
        return allProducts.price == price;
    })
    showProducts(products)
})

let goToCart = document.createElement('button');
goToCart.innerText = 'Go to Cart';
goToCart.addEventListener('click', function () {
    window.location.href = 'cart.html';
})

buttons.append(highToLow, lowToHigh, filterByBrand, priceRange, goToCart)












