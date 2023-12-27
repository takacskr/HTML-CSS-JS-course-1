document.addEventListener('DOMContentLoaded', () => {
    // Get references to form elements
    let orderForm = document.getElementById('orderForm');
    let btn = orderForm.querySelector('button.btn.btn-primary');
    let priceOutput = orderForm.querySelector('#priceOutput+label');
    let isDeliveryInput = orderForm.querySelector('#isDeliveryInput');

    let _ = 0;

    /*
    // Add click event listener to the button
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const PRICE = 2800;
        let amount = 0;
        let quantity = parseInt(
            orderForm.querySelector('#quantityInput').value
        );

        // Check if quantity is valid
        if (
            !isNaN(quantity) &&
            quantity > 0 &&
            quantity < 11 &&
            isValidAddress()
        ) {
            // Calculate the total amount including sauces, extras, and quantity
            amount = (PRICE + getSauces() + getExtra()) * parseInt(quantity);

            // Use the arrow function to get the delivery amount
            let delivery = isDelivery(amount);

            // Display the total amount and delivery charge
            priceOutput.innerHTML = `Fizetendő: ${amount} Ft. Ebből a szállítási díj: ${delivery}`;
        }
    });
    */

    // Function to get the total value of selected sauces
    const getSauces = () => {
        let sauces = orderForm.querySelectorAll('input[name="sauce"]:checked');
        let selectedSauces = 0;

        sauces.forEach((sauce) => {
            selectedSauces += parseInt(sauce.value);
        });

        return selectedSauces;
    };

    // Function to get the value of the selected extra
    const getExtra = () => {
        let extra = orderForm.querySelector('input[name="extra"]:checked');
        return extra != null ? parseInt(extra.value) : 0;
    };

    // Function to determine delivery amount
    const isDelivery = (amount) => {
        let delivery = parseInt(isDeliveryInput.value);
        return isDeliveryInput.checked && amount <= 5000 ? delivery : 0;
    };

    // Function to check whether the address is valid
    const isValidAddress = () => {
        const addressInput = orderForm.querySelector('#addressInput');

        if (addressInput.value.length < 10) {
            alert('A cím nem lehet 10 karakternél rövidebb!');
            addressInput.focus();
            return false;
        }

        return true;
    };

    function modifyElements(selector, attribute, value) {
        let e = document.querySelectorAll(selector);
        for (let i = 0; i < e.length; i++) {
            if (attribute.startsWith('style.')) {
                styleProperty = attribute.split('.')[1];
                e[i].style[styleProperty] = value;
            } else {
                e[i][attribute] = value;
            }
        }
    }

    modifyElements('input', 'style.backgroundColor', 'rgba(255, 145, 123, .5)');

    // Add element to the markup
    let chooseSauce = document.createElement('small');
    chooseSauce.className = 'form-text text-muted';
    chooseSauce.innerHTML = 'Válasszon szószt!';

    let parent = document.querySelector('#orderForm > div:nth-child(2)');
    parent.appendChild(chooseSauce);

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(this);

        let inputs = this.querySelectorAll('input');
        let values = {};
        for (let i = 0; i < inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
        }
        console.log(values);
    });
});
