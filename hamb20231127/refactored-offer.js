document.addEventListener('DOMContentLoaded', () => {
  const weatherApp = {
    data: {
      weathers: [
        { dayNumber: 0, temperature: 11.2 },
        { dayNumber: 1, temperature: 15.5 },
        { dayNumber: 2, temperature: 18.9 },
        { dayNumber: 3, temperature: 9.0 },
        { dayNumber: 4, temperature: 14.7 },
        { dayNumber: 5, temperature: 20.3 },
        { dayNumber: 6, temperature: 22.8 },
      ],
      offers: [
        { upperLimit: 0, offerMessage: 'Ma forró csokit árusítunk' },
        { upperLimit: 15, offerMessage: '15 fok felett ingyen fagylalt' },
        { upperLimit: 10, offerMessage: '10 fok alatt meleg teát kínálunk' },
        { upperLimit: 18, offerMessage: '18 fokig 20% kedvezmény minden hűsítőre' },
        { upperLimit: 22, offerMessage: '22 fokig strandtörölköző akció' },
        { upperLimit: 25, offerMessage: '25 fok felett jegeskávé dupla adaggal' },
        { upperLimit: 26, offerMessage: '26 fok felett új, frissítő smoothieink vannak' }
      ],
    },

    celsiusToFahrenheit: function (celsius) {
      let fahrenheit = (celsius * 9 / 5) + 32;
      return fahrenheit;
    },

    getCelsiusArr: function () {
      return this.data.weathers.map(weather => parseFloat(weather.temperature).toFixed(2));
    },

    getCelsiusDegree: function () {
      const selectedIndex = orderForm.daySelectInput.selectedIndex - 1;
      return this.data.weathers[selectedIndex]?.temperature;
    },

    getOffer: function () {
      const selectedWeather = this.data.weathers.find(weather => this.getCelsiusDegree() <= weather.temperature);
      return selectedWeather ? this.data.offers.find(offer => selectedWeather.temperature <= offer.upperLimit)?.offerMessage : '';
    },

    getMinCelsiusDegree: function () {
      const celsiusArr = this.getCelsiusArr();
      return Math.min(...celsiusArr);
    },

    getMaxCelsiusDegree: function () {
      const celsiusArr = this.getCelsiusArr();
      return Math.max(...celsiusArr);
    },

    getAvgCelsiusDegree: function () {
      const celsiusArr = this.getCelsiusArr();
      const sum = celsiusArr.reduce((acc, value) => acc + parseFloat(value), 0);
      return (sum / celsiusArr.length).toFixed(2);
    },

    updateOutputs: function () {
      const celsiusOutput = orderForm.querySelector('#celsiusOutput');
      celsiusOutput.textContent = `A várható hőmérséklet: ${this.getCelsiusDegree()} °C`;

      const offerOutput = orderForm.querySelector('#offerOutput');
      offerOutput.textContent = `Napi ajánlatunk: ${this.getOffer()}`;

      const minMaxAvgOutput = orderForm.querySelector('#minMaxAvgOutput');
      minMaxAvgOutput.textContent =
        `°C értékek a hétre: Min. ${this.getMinCelsiusDegree()} °C,
          Max. ${this.getMaxCelsiusDegree()} °C,
          Átlag ${this.getAvgCelsiusDegree()} °C`;
    }
  };

  const orderForm = document.querySelector('#orderForm');
  const daySelectInput = orderForm.querySelector('#daySelectInput');

  daySelectInput.addEventListener('change', () => {
    weatherApp.updateOutputs();
  });

  // Initial update when the page is loaded
  weatherApp.updateOutputs();
});
