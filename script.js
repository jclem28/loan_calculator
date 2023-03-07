let loanAmount = document.getElementById("amount").value;
let downPayment = document.getElementById("downpayment").value;
let interestRate = document.getElementById("interest-rate").value;
let loanTerm = document.getElementById("term").value;

let monthlyPaymentValue = document.getElementById("monthly-payment-value");
let totalPrincipleValue = document.getElementById("total-principle-value");
let totalInterestValue = document.getElementById("total-interest-value");
let totalCostValue = document.getElementById("total-cost-value");

const compute = document.querySelector("button");

loanAmount = parseFloat(loanAmount);
downPayment = parseFloat(downPayment);
interestRate = parseFloat(interestRate);
loanTerm = parseFloat(loanTerm);

let interest = interestRate / 12 / 100;
let newLoanAmount = loanAmount - downPayment;

monthlyPayment = () => {
  let payment =
    (newLoanAmount * interest * Math.pow(1 + interest, loanTerm)) /
    (Math.pow(1 + interest, loanTerm) - 1);

  return payment;
};

updateData = (payment) => {
  monthlyPaymentValue.innerText = Math.round(payment);

  let totalPrinciple = Math.round(loanTerm * payment);
  totalPrincipleValue.innerHTML = totalPrinciple;

  let totalInterestPayable = Math.round(totalPrinciple - newLoanAmount);
  totalInterestValue.innerHTML = totalInterestPayable;

  let totalCost = Math.round(totalPrinciple + totalInterestPayable);
  totalCostValue.innerText = totalCost;
};

init = () => {
  let myPayment = monthlyPayment();
  updateData(myPayment);
};

// Event Listener for Compute Button
compute.addEventListener("click", init);
