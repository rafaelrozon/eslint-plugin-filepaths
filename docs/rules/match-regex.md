# match regex (match-regex)

Please describe the origin of the rule here.


## Rule Details

This rule aims to warn users if a file is placed in the wrong folder.

Examples of **incorrect** code for this rule:

```
|-- project
    |-- src
        |-- __tests
        |   |-- index.test.js

// or

|-- project
    |-- src
        |-- tests
        |   |-- index.test.js
```

Examples of **correct** code for this rule:

```
|-- project
    |-- src
        |-- __tests__
        |   |-- index.test.js
```

### Options

Example:
```
"filepaths/match-regex": [
    "error",
    [
        {
            "file": "[a-z]+.test.js",
            "folder": "__tests__"
        },
        {
            "file": "[a-z]+.stories.js",
            "folder": "stories"
        }
    ]
]
```

The option for this rule is a list of objects. Each object has 2 fields: file and folder. Both should be a regex string. When linting the files, the plugin uses the file property to determine if the file should be linted and then combine the folder and the file to check if the file is under the right folder.