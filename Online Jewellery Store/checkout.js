

let buttons = document.getElementById('buttons');

let goToPayment = document.createElement('button');
    goToPayment.innerText = 'Go to Payment';
    goToPayment.type = 'submit';
    goToPayment.addEventListener('click', function (){
        window.location.href = 'payment.html';
    });

buttons.append(goToPayment);