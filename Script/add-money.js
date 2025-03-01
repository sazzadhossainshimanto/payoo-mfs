document.getElementById("add-monye").addEventListener("click",
        function(event){
                event.preventDefault();
                const amount = document.getElementById("amount").value;
                const convertedAmount = parseInt(amount);
                const pin = document.getElementById('pin').value;
                const convartedPin = parseInt(pin);
                const mainBalence = document.getElementById("mian-balece").innerText;
                const convertedBalence = parseFloat(mainBalence);
                if(convartedPin===1234){
                        const sum = convertedBalence+convertedAmount;
                        document.getElementById("mian-balece").innerText= sum;
                }
                else{
                        alert("enter correct passcode")
                }
              
        }
)