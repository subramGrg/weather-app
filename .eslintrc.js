module.exports = {
  "env": {
    "browser": true,
    "es6": true,
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
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "array-callback-return": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/button-has-type": 0,
    "react/destructuring-assignment": 0,
    "semi": ["error", "never"],
    "jsx-a11y/label-has-associated-control": 0,
    "react/jsx-fragments": [0, "element"],
    "react/jsx-one-expression-per-line": 0,
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
  }
}