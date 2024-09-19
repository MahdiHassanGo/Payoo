document.getElementById('button-login').addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('login button clicked');
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    console.log(phoneNumber);
    console.log(pinNumber);
    
    // Use pinNumber instead of pin
    if (phoneNumber === '123' && pinNumber === '123') {
        console.log('you are logged in');
        window.location.href = '/home.html';
    } else {
        alert('wrong phone number or pin');
    }
});
