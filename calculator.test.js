// // Three As of testing: 
// // 1.Arrange - arrange the data 
// // 2.Act -  call the function we are acutally testing 
// // 3.Assert -  check the value agaisnt expectation 


// const {add} = require('./calculator');

// // grouping the test so its easier to see what is happening when running npm test in the terminal
// // can then put the test into the {} of the describe
// describe ('testing addition', () => {

//     // adding an anonymous inline arrow function
//     test('can add two positive numbers', () => {
//         const expected = 5;
//         const actual = add(2,3);
//         expect(actual).toBe(expected);
//     })

//     test('can add a negative and positive number', () => {
//         const expected = -2;
//         const actual = add(-5, 3);
//         expect(actual).toBe(expected);
//     })

// })

// making test for the new constructor
const {Calculator} = require('./calculator');

let calculator;

beforeEach( () => {
    calculator = new Calculator();
})

describe ('testing addition', () => {

    // adding an anonymous inline arrow function
    test('can add two positive numbers', () => {
        const expected = 5;
        const actual = calculator.add(2,3);
        expect(actual).toBe(expected);
    })

    test('can add a negative and positive number', () => {
        const expected = -2;
        const actual = calculator.add(-5, 3);
        expect(actual).toBe(expected);
    })
})

describe ('testing subtraction', () => {

    test('can subtract two positive numbers', () => {
        const expected = 5;
        const actual = calculator.subtract(10, 5);
        expect(actual).toBe(expected);
    })

    test('can subtract positive number from negative number', () => {
        const actual = calculator.subtract(-5, 5);
        const expected = -10;
        expect(actual).toBe(expected);
    })
})

describe('testing multiply', () => {

    test('can multiply positive numbers', () => {
        const actual = calculator.multiply(3, 3);
        const expected = 9;
        expect(actual).toBe(expected);
    })

    test('can multiply one positive number and one negative number', () => {
        const actual = calculator.multiply(3, -3);
        const expected = -9;
        expect(actual).toBe(expected);
    })

    test('can multiply two negative numbers', () => {
        const actual = calculator.multiply(-3, -3);
        const expected = 9;
        expect(actual).toBe(expected);
    })
})

describe('testing divide', () => {

    test('can divide two positive numbers', () => {
        const actual = calculator.divide(10, 2);
        const expected = 5;
        expect(actual).toBe(expected);        
    })

    test('can divide a positive number by a negative number', () => {
        const actual = calculator.divide(10, -2);
        const expected = -5;
        expect(actual).toBe(expected);
    })

    test('can divide negative number by a positive number', () => {
        const actual = calculator.divide(-10, 2);
        const expected = -5;
        expect(actual).toBe(expected);
    })

    test('can divide a negative number by a negative number', () => {
        const actual = calculator.divide(-10, -2);
        const expected = 5;
        expect(actual).toBe(expected);
    })
})

describe('testing modulus', () => {

    test('can give modulus of positive number', () => {
        const actual = calculator.modulus(2);
        const expected = 2;
        expect(actual).toBe(expected);
    })

    test('can give modulus of negative number', () => {
        const actual = calculator.modulus(-2);
        const expected = 2;
        expect(actual).toBe(expected);
    })

    test('gives 0 if number is 0', () => {
        const actual = calculator.modulus(0);
        const expected = 0;
        expect(actual).toBe(expected);
    })
})

describe('testing even or odd', () => {

    test('can give true if even', () => {
        const actual = calculator.evenOrOdd(2);
        const expected = (true);
        expect(actual).toBe(expected);
    })

    test('can give false if odd', () => {
        const actual = calculator.evenOrOdd(3);
        const expected = (false);
        expect(actual).toBe(expected);
    })

    test('can give true if negative and even', () => {
        const actual = calculator.evenOrOdd(-2);
        const expected = (true);
        expect(actual).toBe(expected);
    })

    test('can give false if negative and odd', () => {
        const actual = calculator.evenOrOdd(-3);
        const expected = (false);
        expect(actual).toBe(expected);
    })
})