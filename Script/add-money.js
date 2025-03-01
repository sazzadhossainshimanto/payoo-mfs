document.getElementById("add-monye").addEventListener("click",
        function(event){
                event.preventDefault();
                const value = getInputVlauebyID("amount");
                const pin = getInputVlauebyID("pin");
                const balace = getInnerTextbyID("mian-balece")
                const account = document.getElementById("account-number").value;

                 console.log(value, pin, balace)

                 if(account.length===11){
                        if(pin===1234){
                           const sum = balace + value;
                                document.getElementById("mian-balece").innerText =sum;





                                const container = document.getElementById("transection-container");
                                const p = document.createElement("p");
                                p.innerText = `
                                Added amount ${value} doller form A/C:${account}
                                `
                                container.appendChild(p);
                                container.style.color = "green";
                        }
                        else{
                                alert("incorrect")
                        }
                 }
                else{
                        alert("enter your correct account number")
                }
              
        }

)