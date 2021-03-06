import { expect } from 'chai'
import { pour, free as freeBarmen } from '../src/barmen'
import { drink, sober } from '../src/me'

//simple asserts
//complex asserts

beforeEach(function() {
    console.log('before each');
    freeBarmen();
    sober();
});

afterEach(function() {
    console.log('after each');
});

describe('given: barmen is free and I want X grams', function() {
    describe('when: i ask him to pour X grams', function() {
        var tests = [
            {ask: 50, expected: 50},
            {ask: 25, expected: 25},
            {ask: 100, expected: 100}
        ];

        tests.forEach(function(testCase) {
            it('then: i got a glass with ' + testCase.ask + ' grams of whisky', function() {
                var iAskVolume = testCase.ask;

                var volumeInGlass = pour(iAskVolume);

                expect(volumeInGlass).is.equal(testCase.expected);
            });
        });
    });
});