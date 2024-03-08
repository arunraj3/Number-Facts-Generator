
let submitButton = document.getElementById("get-fact-button")
let inputElement = document.getElementById("number-input")
async function getNumber(){
    
    if(inputElement.value==''){inputElement.value = 0};
    const response = await fetch(`http://numbersapi.com/${inputElement.value}/math`);
    const fact = await response.text();
    let factDisplay = document.getElementById("fact-display");
    factDisplay.innerHTML = fact;
}


submitButton.addEventListener("click",getNumber)

inputElement.addEventListener("keypress",(event)=>{if(event.key==="Enter"){
    event.preventDefault();
    submitButton.click();
}})

