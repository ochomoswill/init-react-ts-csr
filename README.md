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

### Setup Prettier

Install Prettier dependencies

```bash
pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Add a `.prettierignore` to define files that shouldn't be formatted.

```prettier
.vscode
.idea
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
