document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault();
const addMoneyInput = document.getElementById('input-add-money').value;
console.log (addMoneyInput);
const pinNumber = document.getElementById('input-pin-number').value;
console.log(pinNumber);

if(pinNumber === '123')
{
    // console.log ('adding money to your account');
    const balance =document.getElementById('balance').innerText;
    console.log(balance);
     const addMoneyNumber = parseInt(addMoneyInput);
     const balanceNumber = parseInt(balance);
     newBalance= addMoneyNumber + balanceNumber;
     console.log(newBalance);
}
else{
    alert('failed to add money! please try again');
}

})