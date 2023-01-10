// an anonymous function
// const add = function(number1, number2){
//     return number1 + number2;
// }

// exporting the function to be able to test it - it can be imported elsewhere (test file)
// module.exports = {add};
//module is an object 

// creating a constructor 
// line 13: adding in the add function from above into the this.add 
const Calculator = function(){
    this.add = function(number1, number2){
        return number1 + number2;
    }
    this.subtract = function(number1, number2){
        return number1 - number2;
    }
    this.multiply = function(number1, number2){
        return number1 * number2;
    }
    this.divide = function(number1, number2){
        return number1 / number2;
    }
    this.modulus = function(number1){
        if (number1 > 0) {
            return number1 
        } else if (number1 < 0){
            return -number1 
        } else return 0
    }
}

// now instead of exporting just {add}, we export {Calculator}

module.exports = {Calculator};
