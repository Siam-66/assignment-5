document.getElementById('btn-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputValue('donate-noakhali');

        const donate = getTextValue('account-noakhali');

        const balance = getTextValue('account-balance');

        if(isNaN(addMoney)){
            alert('Failed to donate money');
            return;
        }

        if(addMoney < 0 ){
            alert('Negative numbers not allowed');
            return;
        }

        else{
            
            const newDonate = donate + addMoney;

            document.getElementById('account-noakhali').innerText = newDonate;
        
        
        }

    

        if(addMoney > balance){
            
            alert('You do not have enough money to donate');
            return;
        }
        
        else{
            const newBalance = balance - addMoney;

            document.getElementById('account-balance').innerText = newBalance;


            const div = document.createElement('div');
            div.classList.add('border-2');
            div.innerHTML = `
                <h4>${addMoney} Taka is Donate for Flood at Noakhali, Bangladesh </h4>
            `

            document.getElementById('history-container').appendChild(div);

        }


    })