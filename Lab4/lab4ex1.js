function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function specialOperation(x,y,operation) {
    console.log(operation(x,y));
}
specialOperation(35,20,add);
specialOperation(80,20,divide);
specialOperation(25,12,multiply);
