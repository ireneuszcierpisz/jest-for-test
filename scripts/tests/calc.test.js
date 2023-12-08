/*
first we need to import the  function that we're testing from the calc.js file.  
And we're assigning this to  a constant because we don't want it to accidentally get overwritten somehow.
*/
const { TestScheduler } = require('jest');
const addition = require("../calc");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 20 and 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 72 for 50 and 22", () => {
            expect(addition(50, 22)).toBe(72);
        });
        test("should return 'Good job!' for 10 and 10", () => {
            expect(addition(10, 10)).toBe('Good job!');
        });
        test("should return 'Null' for Null and 0", () => {
            expect(addition(Null, 0)).toBe('Null');
        });
    });
});

