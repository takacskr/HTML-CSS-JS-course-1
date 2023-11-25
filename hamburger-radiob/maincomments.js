// Create a module to encapsulate order-related functionality
// Modul létrehozása, ami az értékrendeléssel kapcsolatos funkcionalitást összegzi
const orderModule = (function() {
    // Private variable to store the selected topping value
    // Privát változó a kiválasztott feltét értékének tárolására
    let selectedToppingValue = 0;

    // Private function to update the order total based on the inputs
    // Privát funkció a rendelés teljes összegének frissítésére a bemenetek alapján
    const updateSum = () => {
        // Get references to DOM elements
        // DOM elemek hivatkozásainak lekérése
        const amountInput = document.querySelector('#amountInput');
        const sumOfTheOrder = document.querySelector('#sumOfTheOrder');
        const PRICE = 1200;

        // Calculate the order total by multiplying the amount input with the base price and adding the selected topping value
        // Számold ki a rendelés teljes összegét az összeg bevitel és az alapár szorzatával, majd add hozzá a kiválasztott feltét értékét
        let sum = parseInt(amountInput.value) * PRICE + selectedToppingValue;

        // Display the order total in the "sumOfTheOrder" input
        // Jelenítsd meg a rendelés teljes összegét a "sumOfTheOrder" bevitelmezőben
        sumOfTheOrder.value = sum + " Ft";
    };

    // Private function to initialize event listeners for topping inputs
    // Privát funkció az eseményfigyelők inicializálásához a feltétekhez
    const initToppingInputListeners = () => {
        // Get references to topping inputs
        // Hivatkozások lekérése a feltétekhez
        const toppingInput = document.getElementsByName('topping');

        // Add a change event listener to each topping input
        // Adj hozzá egy változás eseményfigyelőt minden feltét bemenethez
        toppingInput.forEach(radio => {
            radio.addEventListener('change', () => {
                // Update the selected topping value when the input changes
                // Frissítsd a kiválasztott feltét értékét, amikor a bemenet változik
                selectedToppingValue = parseInt(radio.value);
                // Update the order total based on the new topping value
                // Frissítsd a rendelés teljes összegét az új feltét érték alapján
                updateSum();
            });
        });
    };

    // Private function to initialize event listener for the amount input
    // Privát funkció az eseményfigyelő inicializálásához az összeg beviteléhez
    const initAmountInputListener = () => {
        // Get a reference to the amount input
        // Hivatkozás lekérése az összeg beviteléhez
        const amountInput = document.querySelector('#amountInput');

        // Add an input event listener to the amount input
        // Adj hozzá egy bemeneti eseményfigyelőt az összeg beviteléhez
        amountInput.addEventListener('input', () => {
            // Update the order total based on the new amount value
            // Frissítsd a rendelés teljes összegét az új összeg értékének alapján
            updateSum();
        });
    };

    // Private function to initialize event listener for the order button
    // Privát funkció az eseményfigyelő inicializálásához a rendelés gombjához
    const initOrderButtonListener = () => {
        // Get a reference to the order button
        // Hivatkozás lekérése a rendelés gombjához
        const orderButton = document.querySelector('#orderButton');

        // Add a click event listener to the order button
        // Adj hozzá egy kattintás eseményfigyelőt a rendelés gombjához
        orderButton.addEventListener('click', e => {
            // Prevent the default form submission behavior
            // Megakadályozza az alapértelmezett űrléküldési viselkedést
            e.preventDefault();

            // The updateSum() function is called here as well to ensure the sum is updated when the button is clicked.
            // Az updateSum() funkciót itt is meghívjuk, hogy biztosítsuk a rendelés teljes összegének frissítését a gombra kattintáskor.
            updateSum();
        });
    };

    // Public method to initialize the module
    // Nyilvános metódus a modul inicializálásához
    return {
        init: () => {
            // Call private functions to set up event listeners
            // Hívja meg a privát funkciókat az eseményfigyelők beállításához
            initToppingInputListeners();
            initAmountInputListener();
            initOrderButtonListener();

            // Initial update of the sum
            // Az összeg kezdeti frissítése
            updateSum();
        }
    };
})();

// Initialize the order module
// Az értékrendeléssel kapcsolatos modul inicializálása
orderModule.init();
