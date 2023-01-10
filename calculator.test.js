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