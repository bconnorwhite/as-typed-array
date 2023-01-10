<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>as-typed-array</h1>
  <a href="https://npmjs.com/package/as-typed-array">
    <img alt="npm" src="https://img.shields.io/npm/v/as-typed-array.svg">
  </a>
  <a href="https://github.com/bconnorwhite/as-typed-array">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/as-typed-array.svg">
  </a>
</div>

<br />

<blockquote align="center">Make any value an array.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/as-typed-array">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/as-typed-array?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add as-typed-array
```

```sh
npm install as-typed-array
```

```sh
pnpm add as-typed-array
```

## Usage

```ts
import asArray from "as-typed-array";

asArray(["ok"]); // ["ok"]

asArray("ok"); // ["ok"]

asArray({ ok: true }); // [{ ok: true }]

asArray(undefined); // [];
```

```ts
import { isArray } from "as-typed-array";

isArray(["ok"]); // true
isArray("ok"); // false
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/as-typed-array.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
