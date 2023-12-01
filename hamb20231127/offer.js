document.addEventListener('DOMContentLoaded', () => {
  daySelectInput.addEventListener('change', () => {
    let celsiusOutput = orderForm.querySelector('#celsiusOutput');
    celsiusOutput.textContent = `A várható hőmérséklet: ${getCelsiusDegree()} °C`;

    let offerOutput = orderForm.querySelector('#offerOutput');
    offerOutput.textContent = `Napi ajánlatunk: ${getOffer()}`;
  });

  const getCelsiusDegree = () => {
    let celsius = ['-2', '0', '17.8', '22.5', '25.8', '32', '10'];

    let daySelectInput = orderForm.querySelector('#daySelectInput');
    let selectedIndex = orderForm.daySelectInput.selectedIndex - 1;
    let celsiusNumber = celsius[selectedIndex];

    return celsiusNumber;
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

    if (celsiusDegree < 0) {
      return offer[0];
    } else if (celsiusDegree >= 0 && celsiusDegree <= 15) {
      return offer[1];
    } else if (celsiusDegree >= 15 && celsiusDegree <= 20) {
      return offer[2];
    } else if (celsiusDegree >= 20 && celsiusDegree <= 25) {
      return offer[3];
    } else if (celsiusDegree >= 25) {
      return offer[4];
    } else {
      return false;
    }
  };
});
