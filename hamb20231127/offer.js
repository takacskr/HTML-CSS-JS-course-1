document.addEventListener('DOMContentLoaded', () => {
  let celsiusArr = ['-2', '42', '17.8', '22.5', '25.8', '32', '10'];

  daySelectInput.addEventListener('change', () => {
    let celsiusOutput = orderForm.querySelector('#celsiusOutput');
    celsiusOutput.textContent = `A várható hőmérséklet: ${getCelsiusDegree()} °C`;

    let offerOutput = orderForm.querySelector('#offerOutput');
    offerOutput.textContent = `Napi ajánlatunk: ${getOffer()}`;

    let minMaxAvgOutput = orderForm.querySelector('#minMaxAvgOutput');
    minMaxAvgOutput.textContent = `°C értékek a hétre: Min. ${getMinCelsiusDegree(
      celsiusArr
    )} °C,
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

  /*
  // Using the JavaScript built-in function for get the min number
  const getMinCelsiusDegree = (arr) => {
    return Math.min(...arr);
  };

  // Using the JavaScript built-in function for get the min number
  const getMaxCelsiusDegree = (arr) => {
    return Math.max(...arr);
  };
  */

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