document.getElementById('btn-add-money').addEventListener('click', function(event) {
    event.preventDefault();

    // Get add money input
    const addMoneyInput = getInputFieldValueById('input-add-money');
    console.log('add money input:', addMoneyInput);

    // Get PIN number input
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log('Pin number:', pinNumber);

    if(pinNumber === '123') {
        // Adding money to account
        const balance = document.getElementById('balance').innerText;
        console.log('Current balance:', balance);

        // Convert input values to integers
        const addMoneyNumber = parseInt(addMoneyInput);
        const balanceNumber = parseInt(balance);

        // Calculate the new balance
        const newBalance = addMoneyNumber + balanceNumber;
        console.log('New balance:', newBalance);

        // Update the balance on the page
        document.getElementById('balance').innerText = newBalance;
    } else {
        alert('Failed to add money! Please try again');
    }
});
