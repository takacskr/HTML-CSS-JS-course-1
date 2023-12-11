document.addEventListener('DOMContentLoaded', () => {
    let celsiusArr = ['-2', '42', '17.8', '22.5', '25.8', '32', '10'];

    data = {
        weathers:
                [
                    { dayNumber: 0, temperature: 11.2 },
                    { dayNumber: 1, temperature: 15.5 },
                    { dayNumber: 2, temperature: 18.9 },
                    { dayNumber: 3, temperature: 9.0 },
                    { dayNumber: 4, temperature: 14.7 },
                    { dayNumber: 5, temperature: 20.3 },
                    { dayNumber: 6, temperature: 22.8 },
                ],
        
        offers:
                [
                    { upperLimit: 0, offerMessage: 'Ma forró csokit árusítunk' },
                    { upperLimit: 15, offerMessage: '15 fok felett ingyen fagylalt' },
                    { upperLimit: 10, offerMessage: '10 fok alatt meleg teát kínálunk' },
                    { upperLimit: 18, offerMessage: '18 fokig 20% kedvezmény minden hűsítőre'},
                    { upperLimit: 22, offerMessage: '22 fokig strandtörölköző akció' },
                    { upperLimit: 25, offerMessage: '25 fok felett jegeskávé dupla adaggal'},
                    { upperLimit: 26, offerMessage: '26 fok felett új, frissítő smoothieink vannak'}
                ]
    };

    // Using the map function to convert each string to a floating-point number
    let numericArr = celsiusArr.map((value) => parseFloat(value));

    daySelectInput.addEventListener('change', () => {
        let celsiusOutput = orderForm.querySelector('#celsiusOutput');
        celsiusOutput.textContent = `A várható hőmérséklet: ${getCelsiusDegree()} °C`;

        let offerOutput = orderForm.querySelector('#offerOutput');
        offerOutput.textContent = `Napi ajánlatunk: ${getOffer()}`;

        let minMaxAvgOutput = orderForm.querySelector('#minMaxAvgOutput');
        minMaxAvgOutput.textContent =
        `°C értékek a hétre: Min. ${getMinCelsiusDegree(celsiusArr)} °C,
        Max. ${getMaxCelsiusDegree(celsiusArr)} °C,
        Átlag ${getAvgCelsiusDegree(celsiusArr)} °C`;
    });

    const getCelsiusDegree = () => {
        let daySelectInput = orderForm.querySelector('#daySelectInput');
        let selectedIndex = orderForm.daySelectInput.selectedIndex - 1;
        let celsiusDegree = celsiusArr[selectedIndex];

        return celsiusDegree;
    };

    const getOffer = () => {
        let offer = [
            'Forró csoki',
            'Meleg tea',
            'Finom süti',
            'Fagyi',
            'Jéghideg limonádé',
        ];

        let celsiusDegree = getCelsiusDegree();
        let celsiusUpperValue = [0, 15, 20, 25];

        for (let i = 0; i < celsiusUpperValue.length; i++) {
            if (celsiusDegree < celsiusUpperValue[i]) {
                return offer[i];
            }
        }

        return offer[offer.length - 1];
    };

    const getMinCelsiusDegree = (arr) => {
        if (arr.length === 0) {
            return undefined;
        }

        let i = 0;
        let min = arr[i];

        do {
            if (arr[i + 1] < min) {
                min = arr[i + 1];
            }
            i++;
        } while (i < arr.length);

        return min;
    };

    const getMaxCelsiusDegree = (arr) => {
        if (arr.length === 0) {
            return undefined;
        }

        let i = 0;
        let max = arr[i];
        do {
            if (arr[i + 1] > max) {
                max = arr[i + 1];
            }
            i++;
        } while (i < arr.length);

        return max;
    };

    const getAvgCelsiusDegree = (arr) => {
        if (arr.length === 0) {
            return undefined;
        }

        let sum = 0;
        for (const value of arr) {
            sum += parseFloat(value);
        }
        let avg = sum / arr.length;
        return avg.toFixed(2);
    };
});
