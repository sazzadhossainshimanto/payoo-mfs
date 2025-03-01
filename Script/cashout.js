document.getElementById("cashout-btn").addEventListener("click",
        function(event){
                event.preventDefault();
                const pin = document.getElementById("cashout-pin").value;
                const convartedPin = parseInt(pin);
                const amount = document.getElementById("cashout-amount").value;
                const convertedAmount = parseFloat(amount);
                const mainBalence = document.getElementById("mian-balece").innerText;
                const convertedBalence = parseFloat(mainBalence);
                const account = document.getElementById("account-number").value;
                if (convartedPin === 1234) {
                        const sum = convertedBalence - convertedAmount;
                        document.getElementById("mian-balece").innerText = sum;

 
                        const container = document.getElementById("transection-container");
                        const p = document.createElement("p");
                        p.innerText = `
                                CashOut amount ${convertedAmount} doller form A/C:${account}
                                `
                        container.appendChild(p);
                        container.style.color = "red";
                }
                else {
                        alert("enter correct passcode")
                }
        }
)