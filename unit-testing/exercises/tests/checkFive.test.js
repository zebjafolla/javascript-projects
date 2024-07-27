

const checkFive = require('../checkFive.js');
describe("checkFive", function(){
    test("this will check if a number less than 5 produces the correct output", function(){
        let output = checkFive(2);
        expect(output).toBe(`2 is less than 5.`)});
    test("this test will check if 5 returns equal to 5", function(){
        let output = checkFive(5);
        expect(output).toBe(`5 is equal to 5.`)});
    test("This test will check if number a greater than 5 produces the correct output", function(){
        let output = checkFive(7);
        expect(output).toBe(`7 is greater than 5.`)});
});
