document.addEventListener('DOMContentLoaded', () => {
  let celsiusArr = ['-2', '0', '17.8', '22.5', '25.8', '32', '10'];

  daySelectInput.addEventListener('change', () => {
    let celsiusOutput = orderForm.querySelector('#celsiusOutput');
    celsiusOutput.textContent = `A várható hőmérséklet: ${getCelsiusDegree()} °C`;

    let offerOutput = orderForm.querySelector('#offerOutput');
    offerOutput.textContent = `Napi ajánlatunk: ${getOffer()}`;
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

    // If the temperature is higher than the last threshold, return the last offer
    return offer[offer.length - 1];
  };
});
