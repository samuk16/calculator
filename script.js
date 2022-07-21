


function add(a,b){
    
    let sumTemp = a + b;
    // console.log(a + b);
    return sumTemp;
    // console.log(sum);
}

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



let containerNum = document.querySelectorAll('.btn');

let screenNums = document.querySelector('.textCalc');



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

let tempValue1 ; 

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

    screenTemp = '';
}
// let prueba4 = {
//     name:'nashe',
// };


function screen(){
    containerNum.forEach(item => item.addEventListener('click', e => {

        let numPress = e.target.value;

        screenNums.textContent = `${arrNum1} ${arrOperators} ${arrNum2}`;

    }))

}



// containerNum.forEach(item => item.addEventListener('click', e => {

    
//     let tempE = e.target.value;

//     screenTemp = tempE;
//     screenNums.textContent = screenTemp;
//     console.log(typeof screenTemp);
//     if(tempE in nums){
        
//         if(isEmpty == true){
//             let count = arrNum1.push(e.target.value);
//             console.log(arrNum1);

//         }else{
//             let count = arrNum2.push(e.target.value);
//             console.log(arrNum2);
//         }
        

//     }else if(tempE in operators){

//         let count2 = arrOperators.push(e.target.value);
//         console.log(arrOperators);
//         isEmpty = false;
       

//     }else if(tempE === '='){

//         const returnInt = (element) => parseInt(element,10);

//          Num1Final = arrNum1.map(returnInt).join('');
//          Num2Final = arrNum2.map(returnInt).join('');
//          opFinal = arrOperators.join('');
//          Num1FinalInt =  parseInt(Num1Final,10)
//          Num2FinalInt =  parseInt(Num2Final,10)

//         // console.log(typeof Num1FinalInt)
        
        
//         // console.log( sumTemp)

//         console.log(operate(opFinal,Num1FinalInt,Num2FinalInt));

//         screenNums.textContent = `${operate(opFinal,Num1FinalInt,Num2FinalInt)}`;
//         // tempValue1 = add(Num1FinalInt, Num2FinalInt);
//         // console.log( tempValue1)
//         restart();

        

    


//     }
    
   
// }))

let screenTemp  = '0';
let pruebanum2 ;
let pruebaop = [];
let countOpPrueba = 0;

screenNums.textContent = screenTemp;
containerNum.forEach(item => item.addEventListener('click', e => {

    let targetE = e.target.value;
    // screenTemp += targetE;
    // let nashe45 = screenTemp.push(targetE);

    // console.log(screenTemp);

    // pruebanum2 = screenTemp.slice(0,2);
    // console.log(pruebanum2);
    
    

    
    if(targetE in nums || targetE in operators){

        screenTemp += targetE;
        console.log(screenTemp);
        screenNums.textContent = screenTemp;


        if(screenTemp.length > 1){

        
            if(screenTemp.endsWith('+') || screenTemp.endsWith('-') || screenTemp.endsWith('*') || screenTemp.endsWith('/') ){
               
               countOpPrueba++;
               
               console.log(countOpPrueba);
               console.log('termina en un operador')
   
           } 
          
           if(countOpPrueba == 2){
                
                tempValue1 = checkStr(screenTemp);
                screenNums.textContent = checkStr(screenTemp);
                

                screenTemp = `${tempValue1}${targetE}`;
                countOpPrueba = 1;

                console.log('calculoFinal')

           }
           screenNums.textContent = screenTemp;
       }


    }else if(targetE == '='){


        // checkStr(screenTemp);
        screenNums.textContent = checkStr(screenTemp);
         

    }else if(targetE == 'delete'){


        screenTemp = '0';
        countOpPrueba= 0;
        screenNums.textContent = screenTemp;


    }

    
}));





function checkFirstNum(str){


    // if(str[0] !== 0){

    // }

    let regexFirst = /[1-9]/g;
    let regexD = /^0/;
    
    let prueba = str.match(regexFirst);
    console.log(str.replace(regexD,44));
    console.log(prueba);
    // if(prueba === true){

    // }
}

checkFirstNum('044');

function checkStr(str){

    let countOp = 0;
    let numeros = '';
    let op= '';
    let numeros2 = '';
    // let num2isEmpty = true;

    for (let i = 0; i < str.length; i++){
        

        // if(str[i] in operators){
        //      countOp++
        // }
        
        if( i == 0 ){

            if(str[i] == '-'){
                numeros = str.slice(0,1);

            }else if(str[i] in nums){

                numeros += str.slice(i,(i+1));

            }
        }else if(op.length > 0){

            // num2isEmpty = false;
            if(str[i] in nums){

                numeros2 += str.slice(i, (i+1));

            }

        }else if(str[i] in nums){

            numeros += str.slice(i,(i+1));

        }else if(str[i] in operators){

            op = str.slice(i, (i+1));

        }

    }

    if(op == '+'){

        numeros = parseInt(numeros,10);
        numeros2 = parseInt(numeros2,10);
        

    }
    
    return (operate(op,numeros,numeros2));
    // console.log(numeros);
    // console.log(numeros2);
    // console.log(op);


}

// checkStr('3/4')
// console.log(operate('+',-12,44));