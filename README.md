<div align="center">
  <h1>as-typed-array</h1>
  <a href="https://npmjs.com/package/as-typed-array">
    <img alt="npm" src="https://img.shields.io/npm/v/as-typed-array.svg">
  </a>
  <a href="https://github.com/bconnorwhite/as-typed-array">
    <img alt="typescript" src="https://img.shields.io/badge/TypeScript-%F0%9F%91%8D-blue.svg">
  </a>
  <a href="https://github.com/bconnorwhite/as-typed-array">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/as-typed-array?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Make any value an array, and maintain types.

## Installation

```bash
yarn add as-typed-array
```

```bash
npm install as-typed-array
```
<br />

## API

### Usage

```ts
import asArray from "as-typed-array";

asArray(["ok"]); // ["ok"]

asArray("ok"); // ["ok"]

asArray({ ok: true }); // [{ ok: true }]

asArray(undefined); // [];

```

### Types

```ts
import asArray from "as-typed-array";

function asArray<T>(any: (T | T[])): T[]

```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/as-typed-array.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/as-typed-array.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
