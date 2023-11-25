// Create a module to encapsulate order-related functionality
const orderModule = (function() {
    // Private variable to store the selected topping value
    let selectedToppingValue = 0;

    // Private function to initialize event listeners for topping inputs
    const initToppingInputListeners = () => {
        // Get references to topping inputs
        const toppingInput = document.getElementsByName('topping');

        // Add a change event listener to each topping input
        toppingInput.forEach(radio => {
            radio.addEventListener('change', () => {
                // Update the selected topping value when the input changes
                selectedToppingValue = parseInt(radio.value);
            });
        });
    };

    // Private function to initialize event listener for the order button
    const initOrderButtonListener = () => {
        // Get a reference to the order button
        const orderButton = document.querySelector('#orderButton');

        // Add a click event listener to the order button
        orderButton.addEventListener('click', e => {
            // Prevent the default form submission behavior
            e.preventDefault();

            // Get references to other DOM elements
            const amountInput = document.querySelector('#amountInput');
            const PRICE = 1200;

            // Calculate the order total by multiplying the amount input with the base price and adding the selected topping value
            let sum = parseInt(amountInput.value) * PRICE + selectedToppingValue;

            // Display the order total in the "sumOfTheOrder" input
            document.querySelector('#sumOfTheOrder').value = sum + " Ft";
        });
    };

    // Public method to initialize the module
    return {
        init: () => {
            // Call private functions to set up event listeners
            initToppingInputListeners();
            initOrderButtonListener();
        }
    };
})();

// Initialize the order module
orderModule.init();