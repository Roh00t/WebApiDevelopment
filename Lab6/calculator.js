var calculator = {
    description : "This is my calculator",
    add(a,b) {
        return a+b;
    },
    multiply(a,b) {
        return a*b;
    },
    subtract(a,b) {
        return a-b;
    },
    divide(a,b) {
        return a/b;
    }
};
module.exports = calculator;
console.log("Calculator's Description: "+calculator.description);
console.log("Perform add: "+calculator.add(2,3));
console.log("Perform multiply: "+calculator.multiply(2,3));
console.log("Perform subtract: "+calculator.subtract(2,3));
console.log("Perform divide: "+calculator.divide(2,3));
