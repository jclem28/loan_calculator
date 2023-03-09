// Inputs / DOM Elements

const loanValue = document.getElementById("loanValue");
const downPayment = document.getElementById("downPayment");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTerm = document.getElementById("loanTerm");

const form = document.getElementById("loan");

// console.log(loanValue, downPayment, loanAmount, interestRate, loanTerm);

downPayment.addEventListener("keyup", () => {
  loanAmount.value = loanValue.value - downPayment.value;

  let loanAmountValue = loanAmount.value;
  return loanAmountValue;
});

calculateLoan = (loanAmount, interestRate, numberMonthlyPayments) => {
  percentageToDecimal = (percent) => {
    return percent / 12 / 100;
  };
  interestRate = percentageToDecimal(interestRate);

  yearsToMonths = (year) => {
    return year * 12;
  };
  numberMonthlyPayments = yearsToMonths(numberMonthlyPayments);

  let loan =
    (interestRate * loanAmount) /
    (1 - Math.pow(1 + interestRate, -numberMonthlyPayments));
  console.log(loan);
  return parseFloat(loan.toFixed(2));
};

form.onsubmit = (e) => {
  e.preventDefault();
  validate();
  let loanAmount = loanValue.value - downPayment.value;

  let monthlyPayment = calculateLoan(
    loanAmount,
    interestRate.value,
    loanTerm.value
  );

  document.getElementById("monthly-payment").innerHTML = `$ ${monthlyPayment}`;
};

validate = () => {
  if (
    loanValue.value === "" ||
    downPayment.value === "" ||
    interestRate.value === "" ||
    loanTerm.value === ""
  ) {
    // alert("complete all fields");

    let alert = document.createElement("div");
    alert.classList.add = "btn red btn-large";
    alert.innerHTML = `<span>Complete all fields</span>`;
    alert.style.margin = ".5rem 35%";
    form.parentNode.insertBefore(alert, form);

    alert.onclick = () => alert.remove();

    setTimeout(() => alert.remove(), "3000");
  }
};
