// handle deposit button 
document.getElementById('deposit-button').addEventListener('click', function(){
  var depositInput = document.getElementById('deposit-input');
  var depositAmount=depositInput.value ;
   var depositTotal = document.getElementById('deposit-total');
  var previusAmount = depositTotal.innerText;
  var currentAmountTotal = parseFloat (previusAmount)  +parseFloat(depositAmount)  ; 
  depositTotal.innerText=currentAmountTotal; 
  // update account Balance 
  var blanceTotal = document.getElementById('balance-total');
  var balanceTotalAmount = blanceTotal.innerText;
  var newBalanceTotal = parseFloat (balanceTotalAmount)+parseFloat(depositAmount);
  blanceTotal.innerText = newBalanceTotal; 
// clear deposit input
  depositInput.value= '';
})
// handle withdraw Blance 
document.getElementById('withdraw-button').addEventListener('click',function(){
  var withdrawInput = document.getElementById('withdraw-input');
  var withdrawAmount = withdrawInput.value;
  var withdrawTotal =document.getElementById('withdraw-total') ; 
  var previouwithdrawAmount = withdrawTotal.innerText;
  var currentWithdrawTotal = parseFloat  (previouwithdrawAmount) + parseFloat (withdrawAmount);
  withdrawTotal.innerText = currentWithdrawTotal;
  // update balance 
  var balanceTotal = document.getElementById('balance-total');
  var previousBalanceTotal = balanceTotal.innerText;
  var newBalanceTotal = parseFloat (previousBalanceTotal ) - parseFloat (withdrawAmount);
  balanceTotal.innerText =  newBalanceTotal ; 
  // clear withdraw input 
  withdrawInput.value='';
})