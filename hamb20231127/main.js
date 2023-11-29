document.addEventListener('DOMContentLoaded', () => {
  let orderForm = document.getElementById('orderForm');
  let btn = orderForm.querySelector('button.btn.btn-primary');
  let priceOutput = orderForm.querySelector('#priceOutput+label');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const PRICE = 2800;
    let amount = 0;
    let quantity = parseInt(orderForm.querySelector('#quantityInput').value);

    if (!isNaN(quantity) && quantity > 0 && quantity < 11) {
      amount = (PRICE + getSauces() + getExtra()) * parseInt(quantity);
      priceOutput.innerHTML = `Fizetendő: ${amount} Ft.`;
    }
  });

  // Get the summary of all selected sauces
  const getSauces = () => {
    let sauces = orderForm.querySelectorAll('input[type="checkbox"]:checked');
    let selectedSauces = 0;

    sauces.forEach((sauce) => {
      selectedSauces += parseInt(sauce.value);
    });

    return selectedSauces;
  };

  // Get the value of the selected extra
  const getExtra = () => {
    let extra = orderForm.querySelector('input[name="extra"]:checked');
    return extra != null ? parseInt(extra.value) : 0;
  };
});
