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
}

// now instead of exporting just {add}, we export {Calculator}

module.exports = {Calculator};
