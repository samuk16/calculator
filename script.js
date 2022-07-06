

function add(a,b){
    return console.log(a + b);
    // let sum = a + b;
    // return sum;
    // console.log(sum);
}

function subtract(a,b){return console.log(a - b)}

function multiply(a,b){return console.log(a * b)}

function divide(a,b){return a / b}

function operate(o,n1,n2){
    switch(o){

        case '+':
            add(n1,n2);
            
            
        break;

        case '-':
            subtract(n1,n2);

        break;
        
        case '*':
            multiply(n1,n2);

        break;
        
        case '/':
            divide(n1,n2);

        break;
        
        
    }
}

let tempValue1 ;

let containerNum = document.querySelectorAll('.containerNum');

let numAndOperators = {
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
let pruebaNum3  = [];
let pruebaOp6  = [];
let pruebaNum5  = [];

let isEmpty = true;

let prueba4 = {
    name:'nashe',
};


containerNum.forEach(item => item.addEventListener('click', e => {

    /*
    let nashe23 = [e.target.value];
    
    function prueba(arr,num){

       let prueba2 = arr.map(a => {
            if(a == num){
                // console.log(num);
                // prueba4 = prueba3.push(num);
                tempValue1 = nashe23;
                
            }
        });
        // return prueba2;
        
    }
    prueba(numAndOperators,e.target.value);
    // console.log(prueba3);
    console.log(tempValue1);
    */
    let tempE = e.target.value;

    if(tempE in numAndOperators){

        if(isEmpty == true){
            let count = pruebaNum3.push(e.target.value);
            console.log(pruebaNum3);

        }else{
            let count = pruebaNum5.push(e.target.value);
            console.log(pruebaNum5);
        }
        // console.log(e.target.value);
       
        // prueba4.tempNum = [e.target.value];
        // console.log(prueba4);

    }else if(e.target.value in operators){

        let count2 = pruebaOp6.push(e.target.value);
        console.log(pruebaOp6);
        isEmpty = false;
        // prueba4.tempOper = e.target.value;
        // console.log(prueba4)

    }else if(tempE === '='){


        // console.log('=')

        const returnInt = (element) => parseInt(element,10);

        let nashe3 = pruebaNum3.map(returnInt).join('');
        let nashe4 = pruebaNum5.map(returnInt).join('');
        let opFinal = pruebaOp6.join('');

        console.log(nashe3)
        console.log(nashe4)
        console.log(operate(opFinal,nashe3,nashe4));

        // console.log(nashe3.join(''));

    


    }
    
   
}))

