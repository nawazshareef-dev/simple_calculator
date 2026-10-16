var display = document.querySelector(".display");


function numClick(num) {
    if(display.innerText === '0' || display.innerText === 'Error' || display.innerText == 'Infinity'){
        display.innerText = num;
        return;
    }
    display.innerText = `${display.innerText}${num}`;
    
}

function clearAll() {
    display.innerText = '0';
}

function calculateValue(){
    try{
        display.innerText = eval(display.innerText);
    }catch{
        display.innerText = 'Error'
    }
    
}