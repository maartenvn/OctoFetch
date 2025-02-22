<h3> :warning: This library is experimental and subject to change. Will be stable when v0.0.1 is released.</h3>

<p align="center">
  <a href="https://octofetch.js.org" target="_blank">
    <img alt="OctoFetch Logo" width="200" src="https://raw.githubusercontent.com/maartenvn/OctoFetch/master/docs/public/img/logo.svg">
  </a>
</p>

<h2 align="center">OctoFetch</h2>

<p align="center">
JavaScript/TypeScript library for fetching data from APIs with zero dependencies.
</p>

<p align="center">
  <a href="https://github.com/maartenvn/OctoFetch/actions/workflows/test.yml">
    <img src="https://github.com/maartenvn/OctoFetch/actions/workflows/test.yml/badge.svg" alt="CI badge">
  </a>
  
  <a href="https://github.com/maartenvn/OctoFetch/actions/workflows/docs.yml">
    <img src="https://github.com/maartenvn/OctoFetch/actions/workflows/docs.yml/badge.svg" alt="CI badge">
  </a>

  <a href="https://github.com/maartenvn/OctoFetch/actions/workflows/release.yml">
    <img src="https://github.com/maartenvn/OctoFetch/actions/workflows/release.yml/badge.svg" alt="CI badge">
  </a>

  <br />

  <a href="https://www.npmjs.com/package/octofetch">
    <img src="https://img.shields.io/npm/dm/octofetch" alt="NPM Downloads">
  </a>

  <a href="https://www.npmjs.com/package/octofetch">
    <img src="https://img.shields.io/npm/v/octofetch" alt="NPM Version">
  </a>

  <a href="https://bundlephobia.com/result?p=octofetch">
    <img src="https://img.shields.io/bundlephobia/minzip/octofetch" alt="Bundle Size">
  </a>
</p>

## [Documentation](https://octofetch.js.org/)

You can find the full documentation here: [Documentation](https://octofetch.js.org/)

## How does it work

OctoFetch is a thin layer on top of the browser native Fetch API, which is supported in all modern browsers and polyfilled by most tools such as Nuxt.js, Next.js, create-react-app, vue-cli, etc. It allows for much less boilerplate and more reusable code.

OctoFetch is made for browser, but can be used in Node.JS using the package [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch) for polyfilling the native Fetch API.

## Install the package

### Using NPM:

```bash
npm install octofetch --save
```

### Using YARN

```bash
yarn add octofetch
```

## Simple usage

### JavaScript

```javascript
import octofetch from "octofetch";

octofetch()
    .get("https://localhost:5000/api/users/:id")
    .path("id", userId)
    .header("Token", "Bearer my-token-here")
    .fetch()
    .then((user) => console.log(`Got user: ${user}`))
    .catch((error) => console.log(error.code));
```

### TypeScript

```typescript
import octofetch from "octofetch";

const users = await octofetch<User[]>().get("https://localhost:5000/api/users").fetch();
```
