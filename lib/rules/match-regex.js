function findOptionForFilename(options, filename) {
    return options.find(function(option) {
         const req = new RegExp(option.file);
         return req.test(filename);
    });
};

module.exports = {
    meta: {
        docs: {
            description: "Validate file paths against a regular expression",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,
        schema: [
            {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "file": {
                            type: "string",
                        },
                        "folder": {
                            type: "string",
                        }
                    }
                }
            }
        ]
    },
    create: function(context) {
        const filename = context.getFilename();
        return {
            Program: function(node) {
                try {
                    const option = findOptionForFilename(context.options[0], filename);
                    if (option) {
                        const filepath = `${option.folder}/${option.file}`;
                        const folderRegex = new RegExp(filepath);
                        const isFileInRightFolder = folderRegex.test(filename);
                        if (!isFileInRightFolder) {
                            context.report(node, `${option.file} is not in ${option.folder}`);
                        }
                    }
                } catch(error) {
                    console.log('eslint-plugin-filepaths - error: ', error);
                }
            }
        };
    }
};
