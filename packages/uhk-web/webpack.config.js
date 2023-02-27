const path = require("path");

const locate = (name) => path.dirname(require.resolve(`${name}/package.json`))

module.exports = {
    "target": "electron-renderer",
    "node": {
        "global": true,
    },
    "resolve": {
        "alias": {
            "monaco-editor": locate("monaco-editor"),
            "nouislider": locate("nouislider"),
        },
    }
};
