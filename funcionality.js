const container = document.querySelector('#container');
const panel = document.querySelector('#panel');

const buttons = document.getElementsByClassName('number');
const buttonsArray = Array.from(buttons);
buttonsArray.forEach(element => {
    element.addEventListener("click",()=>{
        if(!operatorChoosen){
            let stringNumb = firstNmb.toString();
            firstNmb = parseInt(stringNumb + element.textContent);
        }
        else {
            let stringNumb = secondNmb.toString();
            if(test){
                stringNumb="0";
            }
            secondNmb = parseInt(stringNumb + element.textContent);
        } 
        UpdatePanel();
    });
});

const funcionalButtons = document.getElementsByClassName('fB');
const funcionalButtonsArray = Array.from(funcionalButtons);
funcionalButtonsArray.forEach(element => {
    element.addEventListener("click",()=>{
        if(operatorChoosen){
            let tempValue = Operate();
            firstNmb = tempValue;
            test = true;
        }
        operator = element.textContent;
        operatorChoosen = true;
    });
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener("click",()=>{
    let value = Operate()
    if(value == undefined){
        return;
    }
    panel.textContent = value.toString();
    firstNmb = value;
    operatorChoosen = false;
    secondNmb = 0;
})

const clearButton = document.querySelector('#clear');

let firstNmb=0;
let secondNmb=0;
let operator='';
let operatorChoosen = false;
let test = false;
function Operate(){
    switch(operator){
        case "+":
            return firstNmb + secondNmb;
        case "-":
            return firstNmb - secondNmb;
        case "/":
            if(secondNmb ==0){
                return NaN;
            }
            else{
                return firstNmb / secondNmb;
            }
        case "*":
            return firstNmb * secondNmb;
    }
}

function UpdatePanel(){
    if(operatorChoosen){
        panel.textContent = `${secondNmb}`;
    }
    else{
        panel.textContent = `${firstNmb}`;
    }
    
}