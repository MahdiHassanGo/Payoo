document.getElementById('btn-cashout').addEventListener('click', function(event) {
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    
    console.log(cashOut);
    console.log(pinNumber);

    if (pinNumber === '123') {
        const balance = document.getElementById('balance').innerText;
        console.log(balance);
        const balanceNumber = parseInt(balance, 10);

        const cashOutNumber = parseInt(cashOut, 10);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('balance').innerText = newBalance;
    } else {
        alert('Wrong PIN');
    }
});
