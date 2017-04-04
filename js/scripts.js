//Back-End Logic:
function BankAccount(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}



//Front-End Logic:
$(document).ready(function() {
  $("#bank-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = parseFloat($("#initial-deposit").val());
    var inputtedDepositAmount = parseFloat($("#deposit-amount").val());
    var inputtedWithdrawalAmount = parseFloat($("#withdrawal-amount").val());

    var newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    var output = $("#current-balance").text(newBankAccount.initialDeposit);
  });
});
