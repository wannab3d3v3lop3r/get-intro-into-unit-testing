// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer',function(){
    
    // test the normal case
    it("Returns true when the input value is the same as the expected value",function(){

        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 5, expected:'buzz'},
            {num: 3, expected:'fizz'},
            {num: 1, expected: 1},
            {num: 1111, expected: 1111},
            {num: -1111, expected: -1111}
        ];

        // for each set of inputs `fizzBuzzer` should
        // produce the expected value
        normalCases.forEach(function(data){
            const answer = fizzBuzzer(data.num);
            expect(answer).to.equal(data.expected);
        });
    });

    it("Returns false when incorrect values are not numbers", function(){
        // range of bad inputs where not both are numbers
        const badCases = ['a','1','hello'];

        // prove that an error is raised for bad inputs
        badCases.forEach(function(data){
            expect(function(){
                fizzBuzzer(data)
            }).to.throw(Error);
        });
    });
});