// Create a module to encapsulate order-related functionality
const orderModule = (function() {
    // Private variable to store the selected topping value
    let selectedToppingValue = 0;

    // Private function to update the order total based on the inputs
    const updateSum = () => {
        // Get references to DOM elements
        const amountInput = document.querySelector('#amountInput');
        const sumOfTheOrder = document.querySelector('#sumOfTheOrder');
        const PRICE = 1200;

        // Calculate the order total by multiplying the amount input with the base price and adding the selected topping value
        let sum = parseInt(amountInput.value) * PRICE + selectedToppingValue;

        // Display the order total in the "sumOfTheOrder" input
        sumOfTheOrder.value = sum + " Ft";
    };

    // Private function to initialize event listeners for topping inputs
    const initToppingInputListeners = () => {
        // Get references to topping inputs
        const toppingInput = document.getElementsByName('topping');

        // Add a change event listener to each topping input
        toppingInput.forEach(radio => {
            radio.addEventListener('change', () => {
                // Update the selected topping value when the input changes
                selectedToppingValue = parseInt(radio.value);
                // Update the order total based on the new topping value
                updateSum();
            });
        });
    };

    // Private function to initialize event listener for the amount input
    const initAmountInputListener = () => {
        // Get a reference to the amount input
        const amountInput = document.querySelector('#amountInput');

        // Add an input event listener to the amount input
        amountInput.addEventListener('input', () => {
            // Update the order total based on the new amount value
            updateSum();
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

            // The updateSum() function is called here as well to ensure the sum is updated when the button is clicked.
            updateSum();
        });
    };

    // Public method to initialize the module
    return {
        init: () => {
            // Call private functions to set up event listeners
            initToppingInputListeners();
            initAmountInputListener();
            initOrderButtonListener();

            // Initial update of the sum
            updateSum();
        }
    };
})();

// Initialize the order module
orderModule.init();
