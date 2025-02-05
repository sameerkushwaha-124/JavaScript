const Base_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll('.dropdown select');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode; 
        newOption.value = currCode; 
        if(select.name === 'from' && currCode === 'USD'){
            newOption.selected = 'selected';
        }
        else if(select.name === 'to' && currCode === 'INR'){
            newOption.selected = 'selected';

        }
        select.append(newOption);  
        
        select.addEventListener('change',(event)=>{
            updateFlag(event.target);
        })
    }
}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };
  
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });


const btn = document.querySelector("form button");
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    let amount = document.querySelector('form input')
    let amountValue = amount.value;
    if(amountValue === '' || amountValue < 1){
        amountValue = 1;
        amount.val = '1';
    }
  
    const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amtVal * rate;
    message.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});

