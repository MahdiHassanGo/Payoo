document.getElementById('btn-add-money').addEventListener('click', function(event) {
  event.preventDefault();

  const addMoney = getInputFieldValueById('input-add-money');
  const pinNumber = getInputFieldValueById('input-pin-number');

  if(isNaN (addMoney)){
    alert ('failed to add money');
  }
  if (pinNumber === 123) {
      const balance = getTextFieldValueById('balance');
      const newBalance = balance + addMoney;
      document.getElementById('balance').innerText = newBalance;

      // Create a new div element
      const div = document.createElement('div');
      div.innerText = `Added: ${addMoney} tk. Balance: ${newBalance}`;
      
      // Set the background color to blue
      div.style.backgroundColor = 'blue';
      div.style.color = 'white'; // Optional: set text color for better contrast
      div.style.padding = '10px'; // Optional: add some padding

      console.log(div);

      // Add to transaction history
      document.getElementById('transaction-container').appendChild(div);
  } else {
      alert('failed to add money');
  }
});
