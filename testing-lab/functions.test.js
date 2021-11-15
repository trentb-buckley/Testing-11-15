const { TestWatcher } = require("@jest/core")
const {returnTwo, greeting, add, subtract, multiply, divide} = require("./functions.js")

describe("returnTwo", () => {
    test("Function should return the number 2", () => {
        let result = returnTwo();
        expect(result).toEqual(2)
    })
    test("Function should return type number", () => {
        let result = returnTwo();
        expect(typeof result).toBe('number')
    })
})

describe("greeting", () => {
    test("Function should say hello to the inputted name", () => {
        let result = greeting(true);
        expect(result).toBe("Hello, true")
    })
    test("Function should return type string", () => {
        let result = greeting('Trent');
        expect(typeof result).toBe('string')
    })
})

describe("math functions", () => {
    test("Function should return the sum of two numbers", () => {
        let result = add(1,2);
        expect(result).toEqual(3)
    })
    test("Function should return the subtraction of two numbers", () => {
        let result = subtract(1,2);
        expect(result).toEqual(-1)
    })
    test("Function should return the multiplication of two numbers", () => {
        let result = multiply(1,2);
        expect(result).toEqual(2)
    })
    test("Function should return the division of two numbers", () => {
        let result = divide(1,2);
        expect(result).toEqual(.5)
    })
})