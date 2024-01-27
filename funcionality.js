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
            if(resetSecond){
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
            resetSecond = true;
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
clearButton.addEventListener("click",()=>{
    firstNmb = 0;
    secondNmb = 0;
    operator = '';
    operatorChoosen=false;
    resetSecond = false;
    UpdatePanel();
})

let firstNmb=0;
let secondNmb=0;
let operator='';
let operatorChoosen = false;
let resetSecond = false;
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