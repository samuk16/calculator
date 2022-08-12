
let containerNum = document.querySelectorAll('.btn');
let screenNums = document.querySelector('.textCalc');
const btnDot = document.querySelector('.dot');

let strOne = '';
let strOpOne= '';
let strTwo= '';
let finalStr ;
let tempValue1 ; 
let screenTemp  = '0';
let screenTemp2  = '';
let countdot = 0;
let countOpPrueba = 0;
let str3 = [];

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
    '.':'dot',
};
let operators = {
    '+':'+',
    '-':'-',
    '*':'*',
    '/':'/',
};



let pruebaStr = {
    str1:'',
    str2:'',
    op:'',
    
};



screenNums.textContent = screenTemp;

containerNum.forEach(item => item.addEventListener('click', e => {

    let targetE = e.target.value;
    


    if(targetE in nums && screenTemp.length <= 1 && screenTemp[0] == 0){
        screenTemp = '';
    }
    
    
    
    if(targetE in nums || targetE in operators){


        screenTemp += targetE;
        testLength(targetE);
        screenNums.textContent = screenTemp;
        

        if(screenTemp.length > 1){


            let regexFirst = /\W+$/g;

            str3 = screenTemp.match(regexFirst);

            

            

            if (str3[0].length >= 2 || screenTemp.endsWith('.')) {
                
                countdot++

            }else{

                countOpPrueba++
            }

            screenTemp = checkFirstNum(screenTemp, targetE);
           
            
            
            if (countdot >= 1) {

                btnDot.disabled = true;

             }
            
           if(countOpPrueba >= 2){
                
                tempValue1 = checkStr(screenTemp);
                screenNums.textContent = checkStr(screenTemp);
                

                screenTemp = `${tempValue1}${targetE}`;
                
                countOpPrueba = 1;
                btnDot.disabled = false;
                

           }

           screenNums.textContent = screenTemp;
       }


    }else if(targetE == 'dL'){

        screenTemp = delLastItem(screenTemp);
        
        if (screenTemp == undefined) {

            screenTemp = '0'
        }

        screenNums.textContent = screenTemp;

    }else if(targetE == '='){


        
        screenNums.textContent = checkStr(screenTemp);
        screenTemp = checkStr(screenTemp);
        countOpPrueba = 0;
        

    }else if(targetE == 'delete'){


        screenTemp = '0';
        countOpPrueba= 0;
        countdot = 0;
        btnDot.disabled = false;
        screenNums.textContent = screenTemp;


    }

    
}));



function add(a,b){return a + b;}

function subtract(a,b){return a - b}

function multiply(a,b){return a * b}

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

function checkFirstNum(str,target){

    
    let regexFirst = /\W+$/g;
    let regexD = /.$/;
    let testDot = str.match(regexD);
    let str2 = '';
    let str3;

    str3 = regexFirst.test(str);
   

    if (testDot[0] == '.') {

        console.log('punto');
        return str;
        
    }else{

        str2 = str.replace(regexFirst, target);
       
        return str2;
    }

    
}

function checkStr(str){

    
    let numeros = '';
    let op= '';
    let numeros2 = '';
    

    for (let i = 0; i < str.length; i++){
    
        if( i == 0 ){

            if(str[i] == '-'){

                numeros = str.slice(0,1);

            }else if(str[i] in nums){

                numeros += str.slice(i,(i+1));

            }

        }else if(op.length > 0){
         
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

        numeros = parseFloat(numeros);
        numeros2 = parseFloat(numeros2);
     
    }
    
    return (operate(op,numeros,numeros2));
   


}

function delLastItem(str) {

    let strNas = str;
    let str56;

    if (typeof(str) == "number") {

        strNas = str.toString();
    }

    let strOG = Array.from(strNas);
    

    
    
    if(strOG.length == 0){

        return '0';

    }else if(strOG.length > 1){
        
        

        str56 = strOG.pop();

        if (str56 == '.') {

            countdot--
            btnDot.disabled = false;
            // console.log(str56)
            
        }else if(str56 in operators){

            countOpPrueba--
        }

        return strOG.join('');

    }
    

    
}

function testLength(str){

   
    

    let opFinded;   
    
    let strLength;

    if (strOne.length == 9) {
        // console.log('gola1');
        if (str in nums && strTwo.length <= 9) {
            strTwo += str;
            
        }
    }else if (str in nums) {

        strOne += str;
        
    }else if(str in operators && strOpOne.length == ' '){

        strOpOne += str ;
        
    }
    
    pruebaStr.str1 = strOne;
    pruebaStr.str2 = strTwo;
    pruebaStr.op = strOpOne;
    
    finalStr =`${pruebaStr.str1}${pruebaStr.op}${pruebaStr.str2}`;
    
};
 

