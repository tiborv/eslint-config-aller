module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
    },
    "settings": {
      "ecmascript": 6,
      "jsx": true
    },
    "plugins": [
      "react"
    ],
    "globals": {
      "before": true,
      "assert": true,
      "path": true
    },
    "rules": {
      "jsx-a11y/img-uses-alt": 0,
      "jsx-a11y/redundant-alt": 0,
      "jsx-a11y/valid-aria-role": 0,
      "arrow-body-style": [0],
      "comma-dangle": [2, "always-multiline"],
      "import/extensions": [2, "never"],
      "func-names": 2,
      "global-require": 1,
      "max-len": [1, 120, 2, {"ignoreComments": true}],
      "new-cap": [1, { "capIsNew": false }],
      "no-unused-expressions": 0,
      "no-unused-vars": ["error"],
      "no-cond-assign": [2, "except-parens"],
      "no-extra-strict": 0,
      "no-mixed-operators": ["error", {"allowSamePrecedence": true}],
      "no-multi-spaces": 0,
      "no-param-reassign": 0,
      "no-shadow": [0],
      "no-unneeded-ternary": [2, {"defaultAssignment": true}],
      "no-unused-vars": [1, {"vars": "local", "args": "none"}],
      "no-use-before-define": ["error", "nofunc"],
      "no-use-before-define": ["error", { "functions": false, "classes": true }],
      "quote-props": [1, "consistent-as-needed"],
      "radix": 0,
      "react/jsx-indent": [2, 2],
      "react/no-array-index-key": 0,
      "react/no-unused-prop-types": 1,
      "react/prefer-es6-class": 0,
      "react/require-extension": [0, { "extensions": [".jsx"] }],
      "space-infix-ops": 0
    }
}
