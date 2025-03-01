document.getElementById("cashout-btn").addEventListener("click",
        function(event){
                event.preventDefault();
                const pin = document.getElementById("cashout-pin").value;
                const convartedPin = parseInt(pin);
                const amount = document.getElementById("cashout-amount").value;
                const convertedAmount = parseFloat(amount);
                const mainBalence = document.getElementById("mian-balece").innerText;
                const convertedBalence = parseFloat(mainBalence);
                if (convartedPin === 1234) {
                        const sum = convertedBalence - convertedAmount;
                        document.getElementById("mian-balece").innerText = sum;
                }
                else {
                        alert("enter correct passcode")
                }
        }
)