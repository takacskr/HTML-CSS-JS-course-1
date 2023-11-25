const PRICE = 1200;
let amountInput = document.querySelector('#amountInput');
let orderButton = document.querySelector('#orderButton');
let toppingInput = document.getElementsByName('topping');
let selectedToppingValue = 0;

toppingInput.forEach(radio => {
    radio.addEventListener('change', () => {
        selectedToppingValue = parseInt(radio.value);
    });
});

orderButton.addEventListener('click', e => {
    e.preventDefault();

    let sum = parseInt(amountInput.value) * PRICE + selectedToppingValue;
    document.querySelector('#sumOfTheOrder').value = sum + " Ft";
});