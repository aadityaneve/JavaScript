let buttons = document.getElementById('buttons');

let placeOrder = document.createElement('button');
    placeOrder.innerText = 'PLACE ORDER';
    placeOrder.addEventListener('click', function (){        
        setTimeout(paymentSuccessful, 3000);
    })
buttons.append(placeOrder)


    function paymentSuccessful(){
        alert('Your Order Is Placed.');
    }