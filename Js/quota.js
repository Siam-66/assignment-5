document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputValue('donate-quota');

        const donate = getTextValue('account-quota');

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

            document.getElementById('account-quota').innerText = newDonate;
        
            document.getElementById('my_modal_1').showModal();
        
        }

    

        if(addMoney > balance){ 
            
            alert('You do not have enough money to donate');
            return;
        }
        
        else{
            const newBalance = balance - addMoney;

            document.getElementById('account-balance').innerText = newBalance;


            const div = document.createElement('div');
            div.className = "border rounded-[16px] p-4 space-y-4"
            div.innerHTML = `
                <h4 class="text-2xl font-bold">${addMoney} Taka is Donate for Aid for Injured in the Quota Movement, Bangladesh </h4>
                <p class="text-gray-500 font-light text-base bg-slate-50 rounded-lg p-2" >Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>
            `

            document.getElementById('history-container').appendChild(div);

        }


    })