const replacePunctuation = require("./replacepunctuation.js");

describe("Punctuation replacement tests", () => {
    const testCases = [
        {
            input: "punctuation_replacement.test",
            output: "punctuation replacement test"
        },

        {
            input: "nothing should happen to this string",
            output: "nothing should happen to this string"
        },

        {
            input: "/[!#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/",
            //35 spaces
            output: "                                  "
        },

        {
            input: "''",
            output: "  "
        },

        {
            input: '""',
            output: '  '
        },

        {
            input: "123456789",
            output: "123456789"
        },

        {
            input: "hello world",
            output: "hello world"
        },

        {
            input: "hello%world",
            output: "hello world"
        },

        {
            input: "!hello world",
            output: " hello world"
        },

        {
            input: ";hello?world!",
            output: " hello world "
        },
        
        {
            input: "hello;world",
            output: "hello world"
        },

        {
            input: "hello world?",
            output: "hello world "
        },

    ];

    testCases.map(tc => {
        it(`Returns ${tc.output} when ${tc.input}`, () => {
            const actual = replacePunctuation(tc.input)
            expect(actual).toStrictEqual(tc.output)
        })
    })

})