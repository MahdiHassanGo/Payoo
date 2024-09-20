document.getElementById('btn-cashout').addEventListener('click', function(event) {
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut);
    console.log(pinNumber);
    if(isNaN (cashOut)){
        alert ('failed to add money');
      }
    if (pinNumber === '123') {
        const balance = document.getElementById('balance').innerText;
        console.log(balance);
        const balanceNumber = parseInt(balance, 10);

        const cashOutNumber = parseInt(cashOut, 10);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('balance').innerText = newBalance;

        // Create a new div for the transaction message
        const transactionDiv = document.createElement('div');
        transactionDiv.classList.add('bg-yellow-300', 'p-4', 'rounded', 'mb-4'); // Add some styling classes
        transactionDiv.innerHTML = `
            <h4 class="text-2xl font-bold">Cashout</h4>
            <p>${cashOut} Withdrawn. New Balance: ${newBalance}</p>
        `;
        
        // Append the new transaction div to the transaction container
        document.getElementById('transaction-container').appendChild(transactionDiv);
        
    } else {
        alert('Wrong PIN');
    }
});
