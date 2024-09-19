function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseInt (inputValue);
    console.log(id,inputValue)
    
    return inputValue;
}