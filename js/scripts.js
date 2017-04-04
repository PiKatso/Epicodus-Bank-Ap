//Back-End Logic:
function BankAccount(userName, initialDeposit, depositAmount, withdrawalAmount) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
}

BankAccount.prototype.deposit = function () {
  var balance = this.initialDeposit += this.depositAmount;
}

BankAccount.prototype.withdrawal = function () {
 var balance = this.withdrawalDeposit += this.withdrawalAmount;
}

//Front-End Logic:
$(document).ready(function() {
  $("#bank-form").submit(function(event) {
    event.preventDefault();
    debugger;
    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = parseFloat($("#initial-deposit").val());
    var inputtedDepositAmount = parseFloat($("#deposit-amount").val());
    var inputtedWithdrawalAmount = parseFloat($("#withdrawal-amount").val());

    var newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit, inputtedDepositAmount, inputtedWithdrawalAmount);

    var output = $("#current-balance").text(newBankAccount.deposit());
    console.log(output);
  });
});
