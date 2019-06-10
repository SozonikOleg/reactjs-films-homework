module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-restricted-globals": ["error", "event", "fdescribe"],
        "camelcase": ["error", {"properties": "never"}],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "parser": "babel-eslint",
};