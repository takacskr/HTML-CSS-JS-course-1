document.addEventListener("DOMContentLoaded", () => {
  let orderForm = document.getElementById("orderForm");
  let btn = orderForm.querySelector("button.btn.btn-primary");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const price = 2800;
    let quantityInput = orderForm.querySelector("#quantityInput");
    let amount = 0;

    if (quantityInput) {
      amount =
        (price + getSauces() + getExtra()) * parseInt(quantityInput.value);
    }
    console.log(amount);
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
    return extra != null ? extra.value : 0;
  };
});
