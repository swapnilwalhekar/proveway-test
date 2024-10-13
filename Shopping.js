const radioButtons = document.querySelectorAll('input[name="unit"]');
const totalPriceElement = document.getElementById("total-price");

const oneUnitOffer = document.querySelector("#one-unit-dropdown").parentElement;
const twoUnitOffer = document.querySelector("#two-unit-dropdown").parentElement;
const threeUnitOffer = document.querySelector(
  "#three-unit-dropdown"
).parentElement;

const oneUnitDropdown = document.getElementById("one-unit-dropdown");
const twoUnitDropdown = document.getElementById("two-unit-dropdown");
const threeUnitDropdown = document.getElementById("three-unit-dropdown");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", handleRadioChange);
});

function handleRadioChange() {
  const selectedValue = document.querySelector(
    'input[name="unit"]:checked'
  ).value;

  // Remove the background from all offers initially
  oneUnitOffer.classList.remove("selected-background");
  twoUnitOffer.classList.remove("selected-background");
  threeUnitOffer.classList.remove("selected-background");

  // Hide all dropdowns initially
  oneUnitDropdown.classList.add("hidden");
  twoUnitDropdown.classList.add("hidden");
  threeUnitDropdown.classList.add("hidden");

  // Show the relevant dropdown and apply the background color based on the selected radio button
  switch (selectedValue) {
    case "1":
      oneUnitDropdown.classList.remove("hidden");
      oneUnitOffer.classList.add("selected-background");
      break;
    case "2":
      twoUnitDropdown.classList.remove("hidden");
      twoUnitOffer.classList.add("selected-background");
      break;
    case "3":
      threeUnitDropdown.classList.remove("hidden");
      threeUnitOffer.classList.add("selected-background");
      break;
  }

  calculateTotal(selectedValue);
}

function calculateTotal(selectedValue) {
  let totalPrice = 0;

  switch (selectedValue) {
    case "1":
      totalPrice = 10.0;
      break;
    case "2":
      totalPrice = 18.0;
      break;
    case "3":
      totalPrice = 24.0;
      break;
  }

  totalPriceElement.textContent = `$${totalPrice.toFixed(2)} USD`;
}
