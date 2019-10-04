const rule = require("../../../lib/rules/match-regex");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

function getTestFolderOption() {
    return {
        file: "[a-z]+.test.js",
        folder: "__tests__"
    }
}

ruleTester.run("check-paths", rule, {

    valid: [
        {
            code: "var a = 1; // __tests__/index.test.js",
            filename: "__tests__/index.test.js",
            options: [
                [getTestFolderOption()]
            ],
        },
        {
            code: "var a = 1; // __tests__/button.test.js",
            filename: "__tests__/button.test.js",
            options: [
                [getTestFolderOption()]
            ],
        },
        {
            code: "var a = 1; // stories/button.stories.js",
            filename: "stories/button.stories.js",
            options: [
                [
                    {
                        file: "[a-z]+.stories.js",
                        folder: "stories"
                    }
                ]
            ],
        },
    ],
    invalid: [
        {
            code: "var a = 1; // test/index.test.js",
            filename: "test/index.test.js",
            options: [
                [getTestFolderOption()]
            ],
            errors: [{
                message: "[a-z]+.test.js is not in __tests__"
            }]
        },
        {
            code: "var a = 1; // __test/index.test.js",
            filename: "__test/index.test.js",
            options: [
                [getTestFolderOption()]
            ],
            errors: [{
                message: "[a-z]+.test.js is not in __tests__"
            }]
        },
        {
            code: "var a = 1; // test__/index.test.js",
            filename: "test__/index.test.js",
            options: [
                [getTestFolderOption()]
            ],
            errors: [{
                message: "[a-z]+.test.js is not in __tests__"
            }]
        },
        {
            code: "var a = 1; // spec/index.test.js",
            filename: "spec/index.test.js",
            options: [
                [getTestFolderOption()]
            ],
            errors: [{
                message: "[a-z]+.test.js is not in __tests__"
            }]
        },
        {
            code: "var a = 1; // test/aotherfolder/index.test.js",
            filename: "test/aotherfolder/index.test.js",
            options: [
                [getTestFolderOption()]
            ],
            errors: [{
                message: "[a-z]+.test.js is not in __tests__"
            }]
        },
    ]
});
