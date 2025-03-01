function getInputVlauebyID(id){
        const amount = document.getElementById(id).value;
        const convertedValue= parseFloat(amount);
        return convertedValue;
}
function getInnerTextbyID(id){
        const value = document.getElementById(id).innerText;
        const convertedValue = parseFloat(value);
        return convertedValue;
}