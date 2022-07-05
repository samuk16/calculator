

function add(a,b){
    return a + b
    // let sum = a + b;
    // return sum;
    // console.log(sum);
}

function subtract(a,b){return a - b}

function multiply(a,b){return a * b}

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

let tempValue;

let containerNum = document.querySelectorAll('.containerNum');

let numAndOperators = [0,1,2,3,4,5,6,7,8,9,0];
let operators = ['+','-','*','/'];
let prueba3  = [];
let prueba4 = [] ;
containerNum.forEach(item => item.addEventListener('click', e => {


    // console.log(e.target.value)
    // if(e.target.classList.contains('n1')){
    //     console.log(1);
    // }

    
    function prueba(arr,num){

       let prueba2 = arr.map(a => {
            if(a == num){
                console.log(num);
                prueba4 = prueba3.push(num);
                
            }
        });
        // return prueba2;
        
    }
    prueba(numAndOperators,e.target.value);
    console.log(prueba3);
    console.log(prueba4);


}))

