# eslint-plugin-filepaths

Verify filepaths and ensure they are placed correctly in your project.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-filepaths`:

```
$ npm install eslint-plugin-filepaths --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-filepaths` globally.

## Usage

Add `filepaths` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "filepaths"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
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
    }
}
```

## Supported Rules

### **[match-regex](../blob/docs/rules/match-regex.md)**
