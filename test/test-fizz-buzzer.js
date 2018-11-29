// import chai, declare expect variable
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer',function(){
    it("Returns true when the input value is the same as the expected value",function(){
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 5, expected:'buzz'},
            {num: 3, expected:'fizz'},
            {num: 1, expected: 1},
            {num: 1111, expected: 1111}
        ];

        normalCases.forEach(function(data){
            const answer = fizzBuzzer(data.num);
            expect(answer).to.equal(data.expected);
        });
    });

    it("Returns false when incorrect values are not numbers", function(){
        const badCases = ['a','1','hello'];

        badCases.forEach(function(data){
            expect(function(){
                fizzBuzzer(data)
            }).to.throw(Error);
        });
    });
});