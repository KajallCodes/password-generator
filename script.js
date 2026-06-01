const title = document.getElementById("title");
const characters = document.getElementById("characters");  
const types = document.getElementById("types");            
const lowercase = document.getElementById("lowercase");    
const uppercase = document.getElementById("uppercase");    
const numbers = document.getElementById("numbers");        
const symbols = document.getElementById("symbols");        
const clipboard = document.getElementById("clipboard");
const generateBtn = document.getElementById("generateBtn");
const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const display = document.getElementById("display");



let numChar = characters.value;
let case1 = lowercase.checked;
let case2 = uppercase.checked;
let case3 = numbers.checked;
let case4 = symbols.checked;


function selection(){
    characters.addEventListener("input",()=>{
        numChar = characters.value;
    })
    lowercase.addEventListener("change",()=>{
        case1 = lowercase.checked;
    })
    uppercase.addEventListener("change",()=>{
        case2 = uppercase.checked;
    })
    numbers.addEventListener("change",()=>{
       case3  = numbers.checked;
    })
    symbols.addEventListener("change",()=>{
        case4 = symbols.checked;
    })
}
function pool(){
    let riverPool = "";
    if(case1){
        riverPool += "abcdefghijklmnopqrstuvwxyz";
    }
    if(case2){
        riverPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(case3){
        riverPool += "1234567890";
    }
    if(case4){
        riverPool += "@#$%&*!";
    }
    return riverPool;
}


function generate(){
    let poolString = pool();
     if(poolString === ""){
        return;
    }
    let result ="";
    let n = Number(numChar);
    for (let i=0; i<n ;i++){
    let randomIndex = Math.floor(Math.random()*poolString.length);
    result += poolString[randomIndex];  
    }
    password.value = result;
    strengthType();
    show();
}

function strengthType(){
    let n = Number(numChar);
    let transfer1=Number(case1);
    let transfer2=Number(case2);
    let transfer3 =Number(case3);
    let transfer4=Number(case4);
    let transferAll = transfer1 + transfer2 + transfer3 + transfer4;
    if(n<=5 || transferAll===1){
       return "Weak";
    }
    else if(n>=8 && transferAll>=3){
        return "Strong";
    }
    else{
         return "Medium";
    } 
}

function show(){
    let displayy = strengthType();
    display.textContent = "Strength:" + displayy;     
}



generateBtn.addEventListener("click",generate);

clipboard.addEventListener("click",()=>{
    if(password.value === ""){
        alert("Nothing to copy return");
        return;
    }
    navigator.clipboard.writeText(password.value);
    clipboard.textContent = "Copied";
    setTimeout(()=>{
        clipboard.textContent = "Copy"
    },2000);
});


selection();