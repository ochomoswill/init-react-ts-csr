# init-react-ts-csr

## Setup

### Project Initialization

Setup React Typescript project with Vite

```bash
pnpm create vite
```

### Engine Locking

Add the `engines` property on the `package.json` to restrict the node version and the package manager

```json
{
  "engines": {
    "node": ">=18.13.0",
    "pnpm": ">=7.17.1",
    "yarn": "please use pnpm",
    "npm": "please use pnpm"
  }
}
```

Create a `.npmrc` file and add the below. This will give an error if the above node version & package manager configs
are violated.

```ini
engine-strict=true
```

### Setup EsLint

Install & initialize eslint

```bash
pnpm i -D eslint

npx eslint --init
```

Use the [AirBnB](https://github.com/airbnb/javascript) ESLInt Config

```bash
pnpm i eslint-config-airbnb@19.0.4 eslint@^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0 --save-dev
```

Also add the TypeScript EsLint Config

```bash
pnpm i -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^5.13.0 @typescript-eslint/parser@^5.0.0
```

Add a `.eslintignore` to define files that shouldn't be formatted.

```ignore
.vscode
.idea
.husky
build
node_modules
pnpm-lock.yaml
```

### Setup Prettier

Install Prettier dependencies

```bash
pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Add a `.prettierignore` to define files that shouldn't be formatted.

```prettier
.vscode
.idea
.husky
build
node_modules
pnpm-lock.yaml
```

Add a Prettier Script on the `package.json`

```json
{
  "scripts": {
    "prettier": "prettier --write ."
  }
}
```

### Git Hooks

Install Husky to run scripts at different stages of the git process

```bash
pnpm add -D husky
pnpm dlx husky install
```

Set up a Pre-Commit script to lint the codebase before committing to Git

```bash
pnpm dlx husky add .husky/pre-commit "pnpm lint"
```

Set up a Pre-Push script to format & build the code before pushing to Git to ensure everything is working well before
the code is pushed

```bash
pnpm dlx husky add .husky/pre-push "pnpm prettier && pnpm build"
```

### Setup Commit Linting

Standardize commit messages by using a commit linter

Install the commit lint packages

```bash
pnpm add -D @commitlint/config-conventional @commitlint/cli
```

Set up a Commit Msg Hook to lint the commit message

```bash
pnpm dlx husky add .husky/commit-msg 'pnpm dlx --no -- commitlint --edit "$1"'
```

Add `commitlint.config.cjs` to configure the linting rules

```js
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset'
      ]
    ]
  }
};
```

### Setup VS Code Editor Settings

Create `settings.json` file under `.vscode` folder

```bash
mkdir .vscode
nano .vscode/settings.json
```

Add the below settings

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

### Setup Testing

Install Vitest

```bash
pnpm add -D vitest
```

Install Testing Library

```bash
pnpm i -D @testing-library/react @testing-library/jest-dom
```

## References

1. [Setting up vite, React, TypeScript, eslint, vitest, testing-library and react-router](https://www.youtube.com/watch?v=cchqeWY0Nak&list=WL&index=6&t=216s)
2. [How to Build Scalable Architecture for your Next.js Project](https://www.youtube.com/watch?v=Iu5aZDqZt8E)
