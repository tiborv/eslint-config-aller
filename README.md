# eslint-config-aller
Aller Media's ESLint config.

## Installation

Get started by running this command in the root of your project:

```sh
yarn add eslint @aller/eslint-config-nrk --dev
```
or
```sh
npm install --save-dev eslint @aller/eslint-config-aller
```

Then add an `.eslintrc.json` file to the root of your project (see *Documentation* below) before running the `eslint` command, with the following:

```json
{
  "extends": [
    "aller"
  ]
}
```

NOTE: `eslint` plugins are available for most modern text editors, like Atom, emacs, vim, Sublime Text, etc.