document.addEventListener('DOMContentLoaded', () => {
  daySelectInput.addEventListener('change', () => {
    getCelsiusDegree();
  });

  const getCelsiusDegree = () => {
    let celsius = ['11.7', '23', '8.9', '32', '18', '26', '10'];
    let daySelectInput = orderForm.querySelector('#daySelectInput');
    let selectedIndex = orderForm.daySelectInput.selectedIndex - 1;
    let celsiusNumber = celsius[selectedIndex];

    let celsiusOutput = orderForm.querySelector('#celsiusOutput');
    celsiusOutput.textContent = `A várható hőmérséklet: ${celsius[selectedIndex]} °C`;
  };
});
