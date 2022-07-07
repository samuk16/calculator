


function add(a,b){
    
    let sumTemp = a + b;
    // console.log(a + b);
    return sumTemp;
    // console.log(sum);
}
let tempValue1 ; 
function subtract(a,b){
    // return console.log(a - b)
    return a - b;
}

function multiply(a,b){
    // return console.log(a * b)
    return a * b; 
}

function divide(a,b){return a / b}

function operate(o,n1,n2){
    switch(o){

        case '+':
            return add(n1,n2);
            
            
        break;

        case '-':
            return subtract(n1,n2);

        break;
        
        case '*':
            return multiply(n1,n2);

        break;
        
        case '/':
            return divide(n1,n2);

        break;
        
        
    }
}



let containerNum = document.querySelectorAll('.containerNum');

let nums = {
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '0':0,
};
let operators = {
    '+':'+',
    '-':'-',
    '*':'*',
    '/':'/',
};
let arrNum1  = [];
let arrOperators  = [];
let arrNum2  = [];

let Num1Final;
let Num2Final;
let opFinal;
let Num1FinalInt;
let Num2FinalInt;

let isEmpty = true;

function restart(){
    arrNum1 = [];
    arrNum2 = [];
    arrOperators = [];
    isEmpty = true;
}
// let prueba4 = {
//     name:'nashe',
// };


containerNum.forEach(item => item.addEventListener('click', e => {

   
    let tempE = e.target.value;

    if(tempE in nums){

        if(isEmpty == true){
            let count = arrNum1.push(e.target.value);
            console.log(arrNum1);

        }else{
            let count = arrNum2.push(e.target.value);
            console.log(arrNum2);
        }
        

    }else if(tempE in operators){

        let count2 = arrOperators.push(e.target.value);
        console.log(arrOperators);
        isEmpty = false;
       

    }else if(tempE === '='){

        const returnInt = (element) => parseInt(element,10);

         Num1Final = arrNum1.map(returnInt).join('');
         Num2Final = arrNum2.map(returnInt).join('');
         opFinal = arrOperators.join('');
         Num1FinalInt =  parseInt(Num1Final,10)
         Num2FinalInt =  parseInt(Num2Final,10)

        // console.log(typeof Num1FinalInt)
        
        
        // console.log( sumTemp)

        console.log(operate(opFinal,Num1FinalInt,Num2FinalInt));
        // tempValue1 = add(Num1FinalInt, Num2FinalInt);
        // console.log( tempValue1)
        restart();

        

    


    }
    
   
}))

