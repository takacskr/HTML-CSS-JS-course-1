document.addEventListener('DOMContentLoaded', () => {
  let orderForm = document.getElementById('orderForm');
  let btn = orderForm.querySelector('button.btn.btn-primary');
  let priceOutput = orderForm.querySelector('#priceOutput+label');
  let isDelivery = orderForm.querySelector('#isDelivery');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const PRICE = 2800;
    let amount = 0;
    let quantity = parseInt(orderForm.querySelector('#quantityInput').value);
    let delivery = parseInt(isDelivery.value);

    if (!isNaN(quantity) && quantity > 0 && quantity < 11) {
      amount = (PRICE + getSauces() + getExtra()) * parseInt(quantity);
      console.log(amount);
      if (isDelivery.checked && amount <= 5000) {
        amount += delivery;
      } else {
        delivery = 0;
      }

      priceOutput.innerHTML = `Fizetendő: ${amount} Ft. Ebből a szállítási díj: ${delivery}`;
    }
  });

  // Get the summary of all selected sauces
  const getSauces = () => {
    let sauces = orderForm.querySelectorAll('input[name="sauce"]:checked');
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
